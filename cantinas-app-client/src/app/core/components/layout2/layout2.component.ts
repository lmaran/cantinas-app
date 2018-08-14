import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from './core/services/authentication.service';
import { routerTransition } from '../../router.animations';
import { BreadcrumbItem } from '../../interfaces/breadcrumb-item.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state.interfaces';
import * as BreadcrumbSelectors from '../../state/breadcrumb/breadcrumb.selectors';
import * as BreadcrumbActions from '../../state/breadcrumb/breadcrumb.actions';

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
    // breadcrumbItems: BreadcrumbItem[];
    breadcrumbItems$: Observable<BreadcrumbItem[]>;
    // constructor(public auth: AuthenticationService) {}

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        // this.breadcrumbItems = [
        //     {
        //         name: 'Comenzi',
        //         url: '/entities',
        //     },
        //     {
        //         name: 'Comanda: 28 Nov 2017',
        //         url: '/entities/123',
        //     },
        //     {
        //         name: 'Andor Ovidiu',
        //         url: '/entities',
        //     },
        // ];
        this.breadcrumbItems$ = this.store.select(BreadcrumbSelectors.getBreadcrumbItems);
        this.store.dispatch(new BreadcrumbActions.GetAll());
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
