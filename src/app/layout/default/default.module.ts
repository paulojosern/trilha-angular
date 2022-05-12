import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { HomeComponent } from '../pages/home/home.component';
import { StoreComponent } from '../pages/store/store.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
