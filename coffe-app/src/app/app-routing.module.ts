import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from 'src/app/components/list/list.component';
import { CoffeComponent } from 'src/app/components/coffe/coffe.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'coffee',component: CoffeComponent},
  {path: 'coffee/:id', component: CoffeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
