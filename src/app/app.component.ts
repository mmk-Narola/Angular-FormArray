import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService } from './service/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  AsyncData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is Aysnc Pipe');
    }, 2000);
  });

  Count = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);
  });

  title = 'Form-Array';
  isLinear = true;
  data: any;
  CustomObs: any;

  array = [4, 5, 7];

  constructor(
    private formBuilder: FormBuilder,
    private formservice: FormService
  ) {
    // First Way
    // this.formservice.callApi().subscribe((x) => {
    //   console.log('App Component :>> ', x);
    // });
    //Second Way
    // this.formservice.secondeCall().subscribe((res) => {
    //   this.formservice.subjectStatus$.next(res);
    // });
    // this.formservice.subjectStatus$.subscribe((abc) => {
    //   console.log('abc :>> ', abc);
    //   this.data = abc;
    // });
  }

  ngOnInit(): void {
    this.CustomObs = this.Count.subscribe((res) => {
      // console.log(res);
    });
  }
  ngOnDestroy(): void {
    this.CustomObs.unsubscribe();
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
    console.log(this.Empregister.value);
  }
}
