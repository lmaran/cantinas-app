import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Entity } from '../../../core/models/entity';
import { AppModalComponent } from '../../../shared/components/confirmDelete/confirmDelete.component';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent {
    @Input() entities: Entity[];

    @Input() test1: string;

    @Input() loading = false;
    @Output() delete = new EventEmitter<Entity>();
    @Output() edit = new EventEmitter<Entity>();

    // Don't forget to add this (child) component in the current html
    @ViewChild(AppModalComponent) modal: AppModalComponent;

    deleteEntity = function(entity) {
        this.modal.open(`${entity.displayName}`, () => {
            this.delete.emit(entity);
        });
    };

    editEntity = function(entity: Entity) {
        this.edit.emit(entity);
    };

    // constructor() {
    //     console.log('12345-' + this.test);
    //     // console.log(this.entities);
    // }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log(this.test1);
        console.log(this.entities);
    }
}
