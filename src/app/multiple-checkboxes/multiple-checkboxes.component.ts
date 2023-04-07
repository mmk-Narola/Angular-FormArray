import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiple-checkboxes',
  templateUrl: './multiple-checkboxes.component.html',
  styleUrls: ['./multiple-checkboxes.component.scss'],
})
export class MultipleCheckboxesComponent implements OnInit {
  checkBox: FormGroup;
  langs = [
    'Html',
    'Css',
    'Javascripts',
    'TypeScripts',
    'SCSS',
    'Boostrap',
    'Git',
    'Github',
    'Angular CLI',
    'Angular Framework',
    'Firebase',
  ];

  constructor(private fb: FormBuilder) {
    this.checkBox = this.fb.group({
      languages: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  getLanguages(): FormArray {
    return this.checkBox.get('languages') as FormArray;
  }

  handleChanage(e: any) {
    console.log(e.target.checked);
    if (e.target.checked) {
      this.getLanguages().push(new FormControl(e.target.value));
    } else {
      let I = 0;
      this.getLanguages().controls.forEach((i: any) => {
        if (i.value === e.target.value) {
          this.getLanguages().removeAt(I);
        }
        I++;
      });
    }
    console.log(this.checkBox.value);
  }

  uploadFile(e: any) {
    console.log(e.target.files[0]);
  }

  uploadMultiple(e: any) {
    const fileList: FileList = e.target.files;
    console.log(fileList);
  }
}
