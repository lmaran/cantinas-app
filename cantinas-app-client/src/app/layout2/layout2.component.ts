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
import { routerTransition } from '../router.animations';

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
    // constructor(public auth: AuthenticationService) {}

    constructor() {}

    ngOnInit() {}

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
