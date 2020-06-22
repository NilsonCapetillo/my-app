import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaComponent } from './lista/lista.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
    {
        path: 'lista',
        component: ListaComponent
    },
    {
        path: 'tabla',
        component:TablaComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

