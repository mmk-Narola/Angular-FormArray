import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { FormArrayComponent } from './form-array/form-array.component';
import { MultistepComponent } from './multistep/multistep.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductvariantComponent } from './productvariant/productvariant.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { TitleComponent } from './title/title.component';
import { FormService } from './service/form.service';
import { ProductService } from './service/product.service';
import { NestedFormarrayComponent } from './nested-formarray/nested-formarray.component';
import { MultipleCheckboxesComponent } from './multiple-checkboxes/multiple-checkboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    MultistepComponent,
    ProductvariantComponent,
    AddproductComponent,
    TitleComponent,
    NestedFormarrayComponent,
    MultipleCheckboxesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
  providers: [FormService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
