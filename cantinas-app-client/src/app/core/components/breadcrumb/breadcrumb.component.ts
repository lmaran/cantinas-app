import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbItem } from '../../interfaces/breadcrumb-item.interface';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    @Input() breadcrumbItems: BreadcrumbItem[];
    // verticalNavIsCollapsed = false;
    // navGroupAdminIsExpanded = true;
    constructor() {}

    ngOnInit() {}
}
