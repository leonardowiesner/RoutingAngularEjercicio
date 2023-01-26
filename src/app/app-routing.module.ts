import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

const routes: Routes = [
  {
    path:"",redirectTo: "paginas",pathMatch:"full"
  },
  {
    path: 'paginas',
    loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule)
  },
 {
  path:"**",component:NotfoundPageComponent
 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
  
}
