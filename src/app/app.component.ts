import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: '',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'YYYY',
  },
};
interface myForm {
  firstName: string;
  lastName: string;
  dateOfBirth: any;
  framework: string;
  frameworkVersion: string;
  email: string;
  hobby: { name: string; duration: string }[];
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Form {
  date = new FormControl(moment([1998, 0, 1]));
  form: myForm = {
    firstName: 'Petro',
    lastName: 'Pupkin',
    dateOfBirth: this.date,
    framework: 'angular',
    frameworkVersion: '1.2.1',
    email: 'test2@test.test',
    hobby: [
      { name: 'football', duration: '2 month' },
      { name: 'tennis', duration: '6 month' },
    ],
  };
  submit() {
    console.log(this.form);
  }
}
