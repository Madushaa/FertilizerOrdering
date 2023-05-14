import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerPageComponent } from './components/pages/fertilizer-page/fertilizer-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { Tag } from './Shared/models/Tag';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'fertilizer/:id',component:FertilizerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
