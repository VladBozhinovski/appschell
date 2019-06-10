import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'appschell-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'Name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Write your name'
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.model)
  }

}
