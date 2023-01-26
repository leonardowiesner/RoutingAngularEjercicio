import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ArticulosPageComponent } from './articulos-page/articulos-page.component';
import { FotosDetailPageComponent } from './fotos-detail-page/fotos-detail-page.component';
import { FotosPageComponent } from './fotos-page/fotos-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'articulos-page', component: ArticulosPageComponent },
  { path: 'fotos-page', component: FotosPageComponent },
  { path: 'fotos-details-page/:id', component: FotosDetailPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule {
}
