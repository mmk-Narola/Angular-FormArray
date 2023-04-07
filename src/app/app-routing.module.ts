import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { MultistepComponent } from './multistep/multistep.component';
import { ProductvariantComponent } from './productvariant/productvariant.component';
import { NestedFormarrayComponent } from './nested-formarray/nested-formarray.component';
import { MultipleCheckboxesComponent } from './multiple-checkboxes/multiple-checkboxes.component';

const routes: Routes = [
  {
    path: 'multistep',
    component: MultistepComponent,
  },
  {
    path: 'formarray',
    component: FormArrayComponent,
  },
  {
    path: 'nestedformarray',
    component: NestedFormarrayComponent,
  },
  {
    path: 'product',
    component: ProductvariantComponent,
    children: [
      {
        path: 'create',
        component: AddproductComponent,
      },
      {
        path: 'edit/:id',
        component: AddproductComponent,
      },
    ],
  },
  {
    path: 'multiple-checkboxes',
    component: MultipleCheckboxesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
