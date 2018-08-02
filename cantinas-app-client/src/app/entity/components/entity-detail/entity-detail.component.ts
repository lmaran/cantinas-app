import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Entity } from '../../../core/models/entity';
import { AppModalComponent } from '../../../shared/components/confirmDelete/confirmDelete.component';

@Component({
    selector: 'app-entity-detail',
    templateUrl: './entity-detail.component.html',
    styleUrls: ['./entity-detail.component.scss'],
})
export class EntityDetailComponent {
    @Input() entities: Entity[];
    // @Input() loading = false;
    // @Output() delete = new EventEmitter<Entity>();
    // @Output() edit = new EventEmitter<Entity>();

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
}
