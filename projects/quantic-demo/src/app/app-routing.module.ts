import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoColorPickerComponent } from './components/demo-color-pickers/demo-color-picker/demo-color-picker.component';
import { DemoColorPickersComponent } from './components/demo-color-pickers/demo-color-pickers.component';

const routes: Routes = [
  {
    path: 'color-pickers',
    component: DemoColorPickersComponent,
    children: [
      {
        path: 'color-picker',
        component: DemoColorPickerComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/color-pickers',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/color-pickers',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
