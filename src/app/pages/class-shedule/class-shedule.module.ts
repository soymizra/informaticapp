import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassShedulePageRoutingModule } from './class-shedule-routing.module';

import { ClassShedulePage } from './class-shedule.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassShedulePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClassShedulePage]
})
export class ClassShedulePageModule {}
