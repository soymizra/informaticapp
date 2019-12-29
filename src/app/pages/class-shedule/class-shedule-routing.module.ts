import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassShedulePage } from './class-shedule.page';

const routes: Routes = [
  {
    path: '',
    component: ClassShedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassShedulePageRoutingModule {}
