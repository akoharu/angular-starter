import { LazyLoadDirective } from './lazy-image-loader.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyLoadDirective],
  exports: [LazyLoadDirective]
})
export class ImageLazyLoadModule { }
