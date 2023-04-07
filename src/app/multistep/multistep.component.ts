import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.scss'],
})
export class MultistepComponent implements OnInit {
  title = 'Multi Step Form';
  isLinear = true;
  data: any;

  empData: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private formservice: FormService,
    private route: Router
  ) {
    //First Way & Second way
    this.formservice.subjectStatus$.subscribe((anb) => {
      console.log('Multi :>> ', anb);
      this.data = anb;
    });
  }

  ngOnInit(): void {
    const emp = JSON.parse(localStorage.getItem('empDetails'));
    console.log(emp);
    this.empData = emp;
  }

  Empregister = this.formBuilder.group({
    basic: this.formBuilder.group({
      firstname: this.formBuilder.control('', Validators.required),
      lastname: this.formBuilder.control('', Validators.required),
    }),
    contact: this.formBuilder.group({
      email: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', Validators.required),
      link: this.formBuilder.control('', Validators.required),
    }),
    address: this.formBuilder.group({
      country: this.formBuilder.control('', Validators.required),
      state: this.formBuilder.control('', Validators.required),
      city: this.formBuilder.control('', Validators.required),
      pin: this.formBuilder.control('', Validators.required),
    }),
  });

  get Basic() {
    return this.Empregister.get('basic') as FormGroup;
  }
  get Contact() {
    return this.Empregister.get('contact') as FormGroup;
  }
  get Address() {
    return this.Empregister.get('address') as FormGroup;
  }

  handleSubmit() {
    if (this.Empregister.invalid) {
      return;
    }
    const postData = this.Empregister.value;
    console.log(JSON.stringify(this.Empregister.value));
    const localData = localStorage.getItem('empDetails')
      ? JSON.parse(localStorage.getItem('empDetails'))
      : [];
    localData.push(postData);
    localStorage.setItem('empDetails', JSON.stringify(localData));
    this.route.navigate(['/formarray']);
  }
}
