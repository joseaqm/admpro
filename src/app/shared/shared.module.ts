import { NgModule } from '@angular/core';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedComponent} from './shared.component';

@NgModule({
  imports: [],
  declarations: [
    SharedComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NavbarComponent,
    NotfoundComponent,
    SidebarComponent
],
exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NavbarComponent,
    NotfoundComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule { }
