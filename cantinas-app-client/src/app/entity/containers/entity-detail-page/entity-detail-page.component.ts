import { Component, OnInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Entity } from '../../../core/models/entity';

import { Store } from '@ngrx/store';
import { ExtendedAppState } from '../../state/entity.interfaces';
import * as EntityActions from '../../state/entity.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-entity-detail-page',
    templateUrl: './entity-detail-page.component.html',
    styleUrls: ['./entity-detail-page.component.scss'],
})
export class EntityDetailPageComponent implements OnInit {
    entity$: Observable<Entity>;

    isEditMode: boolean;
    submitted: boolean;
    entityForm: FormGroup;

    title: string;
    private formSubmitAttempt: boolean;
    categoryList: any;

    constructor(
        private store: Store<ExtendedAppState>,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        // private entityService: EntityService,
        private location: Location,
        public renderer2: Renderer2
    ) {
        // this.createForm();
    }

    createForm() {
        this.entityForm = this.formBuilder.group({
            displayName: ['', [Validators.required, Validators.minLength(3)]],
            pluralName: ['', [Validators.required, Validators.minLength(3)]],
            uniqueName: ['', [Validators.required, Validators.minLength(3)]],

            description: ['', [Validators.required]],
        });
    }

    isFieldInvalid(field: string) {
        // return (
        //     (!this.entityForm.get(field).valid && this.entityForm.get(field).touched) ||
        //     (this.entityForm.get(field).untouched && this.formSubmitAttempt)
        // );

        return !this.entityForm.get(field).valid && this.formSubmitAttempt;
    }

    // // https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit
    // validateAllFormFields(formGroup: FormGroup) {
    //     Object.keys(formGroup.controls).forEach(field => {
    //         const control = formGroup.get(field);
    //         if (control instanceof FormControl) {
    //             control.markAsTouched({ onlySelf: true });
    //             console.log(field); // firstName, email
    //             console.log(control.errors); // {required:true, email:true}

    //             if (control.errors && control.errors.required) {
    //                 const propertyName = 'required';
    //                 const err = ValidationService.getValidatorErrorMessage(propertyName, control.errors[propertyName]);
    //                 console.log(err);
    //             } else if (control.errors && control.errors.email) {
    //                 const propertyName = 'email';
    //                 const err = ValidationService.getValidatorErrorMessage(propertyName, control.errors[propertyName]);
    //                 console.log(err);
    //             } else {
    //             }

    //             console.log('------------------');
    //         } else if (control instanceof FormGroup) {
    //             this.validateAllFormFields(control);
    //         }
    //     });
    // }

    onSubmit() {
        this.formSubmitAttempt = true;

        // if (this.entityForm.invalid) {
        //     return;
        // }

        const entity = this.entityForm.value;
        this.submitted = true;

        if (this.isEditMode) {
            // entity._id = this.entity._id;

            // this.entityService.updateEntity(entity).subscribe(saved => {
            //     this.router.navigate(['/entities']);
            // });
            this.store.dispatch(new EntityActions.UpdateEntitySuccess(entity));
        } else {
            // this.entityService.createEntity(entity).subscribe(saved => {
            //     // this.router.navigate(['/entities']);
            // });
            // this.store.dispatch(new EntityActions.AddEntity(entity));
        }
    }

    goBack() {
        // https://stackoverflow.com/a/36470719
        this.location.back();
    }

    // reset() {
    //     this.entityForm.reset();
    //     this.formSubmitAttempt = false;
    // }

    ngOnInit() {
        this.categoryList = [
            { label: '' },
            { value: '1', label: 'Supa' },
            { value: '2', label: 'Felul doi' },
            { value: '3', label: 'Salata' },
            { value: '4', label: 'Desert' },
        ];

        // focus on first field https://stackoverflow.com/a/34573219/2726725
        this.renderer2.selectRootElement('#entityName').focus();

        // or directly...https://github.com/rogerpadilla/angular2-minimalist-starter/blob/master/src/app/question/question-form.component.ts
        // const id = this.route.snapshot.params['id'];
        this.route.params.subscribe((params: Params) => {
            const id = params['id'];
            if (id) {
                this.isEditMode = true;
                this.title = 'Editeaza entitate';

                // this.entityService.getEntityById(id.toString()).subscribe((entity: any) => {
                //     this.entity = entity;
                //     this.entityForm.reset({
                //         displayName: entity.displayName,
                //         pluralName: entity.pluralName,
                //         uniqueName: entity.uniqueName,
                //         description: entity.description,
                //     });
                // });

                // this.entity$ = this.store.select(fromEn.getCurrentContact);
                // this.entity$ = this.store.pipe(select('entity')) as Observable<Entity>;
            } else {
                this.title = 'Adauga entitate';
            }
        });
    }

    // // listen for changes on the entire form
    // onChanges(): void {
    //     this.entityForm.valueChanges.subscribe(val => {
    //         this.getFirstErr = `Hello,
    //       My name is ${val.firstName} and my email is ${val.email}.`;
    //     });
    // }

    // listen for changes on on specific form control
    // onChanges(): void {
    //     this.entityForm.get('email').valueChanges.subscribe(val => {
    //         console.log(this.entityForm.get('email').errors);

    //         const errors = this.entityForm.get('email').errors;
    //         if (errors) {
    //             const k = Object.keys(this.entityForm.get('email').errors);
    //             // if (k && k.length > 0) {
    //             //     console.log(k[0]);
    //             // }
    //             this.getFirstErr = `My first err is ${k[0]}.`;
    //         }

    //         // this.getFirstErr = `My email is ${val}.`;

    //         // Object.keys(this.field.errors).forEach(key => {
    //         // console.log(key);
    //         // return key;
    //         // });
    //     });
    // }
}
