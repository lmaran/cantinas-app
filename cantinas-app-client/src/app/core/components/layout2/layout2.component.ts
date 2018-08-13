// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-layout2',
//   templateUrl: './layout2.component.html',
//   styleUrls: ['./layout2.component.scss']
// })
// export class Layout2Component implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from './core/services/authentication.service';
import { routerTransition } from '../../router.animations';
import { BreadcrumbItem } from '../../interfaces/breadcrumb-item.interface';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-layout2',
    animations: [routerTransition],
    templateUrl: './layout2.component.html',
    styleUrls: ['./layout2.component.scss'],
})
export class Layout2Component implements OnInit {
    verticalNavIsCollapsed = false;
    navGroupAdminIsExpanded = true;
    breadcrumbItems: BreadcrumbItem[];
    // constructor(public auth: AuthenticationService) {}

    constructor() {}

    ngOnInit() {
        this.breadcrumbItems = [
            {
                name: 'Comenzi',
                url: '/entities',
            },
            {
                name: 'Comanda: 28 Nov 2017',
                url: '/entities/123',
            },
            {
                name: 'Andor Ovidiu',
                url: '/entities',
            },
        ];
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
