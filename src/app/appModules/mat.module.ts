import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material,
  ],
  exports: [
    Material,
  ]
})
export class MatModule { }
