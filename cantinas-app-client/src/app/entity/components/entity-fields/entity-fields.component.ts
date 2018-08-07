import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EntityField } from '../../../core/models/entity';
import { AppModalComponent } from '../../../shared/components/confirmDelete/confirmDelete.component';

@Component({
    selector: 'app-entity-fields',
    templateUrl: './entity-fields.component.html',
    styleUrls: ['./entity-fields.component.scss'],
})
export class EntityFieldsComponent {
    @Input() entityFields: EntityField[];

    // Don't forget to add this (child) component in the current html
    @ViewChild(AppModalComponent) modal: AppModalComponent;

    deleteEntityField = function(field) {
        this.modal.open(`${field.displayName}`, () => {
            // this.delete.emit(field);
        });
    };

    editEntityField = function(field) {
        this.modal.open(`${field.displayName}`, () => {
            this.delete.emit(field);
        });
    };
}
