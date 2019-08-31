import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
// Materialize Component
import { MzDropdownModule, MzButtonModule, MzTooltipModule, MzToastModule, MzModalModule, MzCheckboxModule} from 'ngx-materialize'
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MzDropdownModule,
    MzButtonModule,MzToastModule,MzTooltipModule,MzModalModule, MzCheckboxModule, NgSelectModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    MzButtonModule,
    MzDropdownModule,MzToastModule,MzTooltipModule,MzModalModule, MzCheckboxModule, NgSelectModule
  ]
})
export class SharedModule {}
