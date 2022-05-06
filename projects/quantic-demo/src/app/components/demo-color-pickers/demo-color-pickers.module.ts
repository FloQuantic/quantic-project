import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoColorPickerComponent } from './demo-color-picker/demo-color-picker.component';
import { DemoColorPickersComponent } from './demo-color-pickers.component';
import { RouterModule } from '@angular/router';
import { ColorPickersModule } from 'projects/quantic-lib/src';

@NgModule({
  declarations: [DemoColorPickerComponent, DemoColorPickersComponent],
  imports: [CommonModule, RouterModule, ColorPickersModule],
  exports: [DemoColorPickerComponent, DemoColorPickersComponent],
})
export class DemoColorPickersModule {}
