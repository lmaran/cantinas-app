import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EntityField } from '../../../core/models/entity';

@Component({
    selector: 'app-entity-fields',
    templateUrl: './entity-fields.component.html',
    styleUrls: ['./entity-fields.component.scss'],
})
export class EntityFieldsComponent {
    @Input() entityFields: EntityField[];
}
