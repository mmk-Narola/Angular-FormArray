import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  title = 'Reactive Form & FormArray';
  productData: FormArray;
  constructor(private formservice: FormService) {
    this.formservice.subjectStatus$.subscribe((anb) => {
      console.log('Form :>> ', anb);
    });
  }

  ngOnInit(): void {}

  dynamicForm = new FormGroup({
    name: new FormControl('', Validators.required),
    product: new FormArray([]),
  });

  productField(): FormGroup {
    return new FormGroup({
      productName: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      delAddres: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    console.log(this.dynamicForm.value);
  }

  addField() {
    this.productData = this.dynamicForm.get('product') as FormArray;
    this.productData.push(this.productField());
  }
  Remove(index: number) {
    this.productData = this.dynamicForm.get('product') as FormArray;
    this.productData.removeAt(index);
  }

  get product() {
    return this.dynamicForm.get('product') as FormArray;
  }
}
