import { Component, OnInit, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Entity } from '../../../core/models/entity';

@Component({
    selector: 'app-entity-detail',
    templateUrl: './entity-detail.component.html',
    styleUrls: ['./entity-detail.component.scss'],
})
export class EntityDetailComponent implements OnInit, OnChanges {
    @Input() entity: Entity;
    isEditMode: boolean;
    submitted: boolean;
    entityForm: FormGroup;
    title: string;
    private formSubmitAttempt: boolean;

    constructor(private formBuilder: FormBuilder, public renderer2: Renderer2) {}

    ngOnInit() {
        this.createForm();

        // focus on first field https://stackoverflow.com/a/34573219/2726725
        this.renderer2.selectRootElement('#entityName').focus();
    }

    // the source of 'this.entity' (in parent container) is an Observable (stream)
    // => this value can be visible in UI (<pre>{{entity | json}}</pre>) but not available in Constructor or ngOnInit()
    // => we have to access this value later, in ngOnChanges. See also:
    // https://github.com/avatsaev/angular-contacts-app-example/.../contact-form.component.ts
    // https://github.com/DeborahK/Angular-NgRx-GettingStarted/.../product-edit.component.ts
    // https://github.com/blove/ngrx-tour-of-heros/.../edit-power.component.ts
    // https://www.concretepage.com/angular-2/angular-2-4-onchanges-simplechanges-example

    // Also, ensure that actions inside this method are fired only once (based on below)

    // 'add page' -> ngOnChanges() fires only once (before ngOnInit()) -> currentValue = null
    //      - applicable for both AppNav and PageReload
    // 'edit page' -> ngOnChanges() fires two times (before and after ngOnInit()) -> currentValue = ... it depends:
    //
    //      Page | From       | Fires | currentVal  | previousVal | firstChange | Notes
    //      ========================================================================================================================
    //      Add  | AppNav     | 1     | null        | undefined   | true        | ok (currentEntityId should be null in state)
    //      Add  | PageReload | 1     | null        | undefined   | true        | ok
    //
    //      Edit | AppNav     | 1     | {..}        | undefined   | true        | ignore (fires before onInit -> entityForm = undef.)
    //           |            | 2     | {..}        | {..}        | false       | ok
    //      Edit | PageReload | 1     | undefined   | undefined   | true        | ignore (fires before onInit -> entityForm = undef.)
    //           |            | 2     | {..}        | undefined   | false       | ok
    //
    ngOnChanges(changes: SimpleChanges) {
        // it fires only for "edit" (not for "create"...@input is not sent in this case)
        // ensure it fires only once (and after ngOnInit). Se comments above.
        if (!changes['entity'].firstChange) {
            this.populateForm(this.entity);
        }
    }
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log(changes);
    //     if (changes['entity'].firstChange) {
    //         if (changes['entity'].currentValue === null) {
    //             this.title = 'Adauga entitate';
    //         } else {
    //             this.isEditMode = true;
    //             this.title = 'Editeaza entitate';
    //         }
    //     } else {
    //         // ensure it fires only once (and after ngOnInit) ... se comments above
    //         // this.title = `${this.title}: ${this.entity.displayName}`; // optional
    //         this.populateForm(this.entity);
    //     }
    // }

    createForm() {
        this.entityForm = this.formBuilder.group({
            displayName: ['', [Validators.required, Validators.minLength(3)]],
            pluralName: ['', [Validators.required, Validators.minLength(3)]],
            uniqueName: ['', [Validators.required, Validators.minLength(3)]],

            description: ['', [Validators.required]],
        });
    }

    populateForm(entity: Entity) {
        this.entityForm.patchValue({
            ...entity,
        });
    }

    isFieldInvalid(field: string) {
        return !this.entityForm.get(field).valid && this.formSubmitAttempt;
    }
}
