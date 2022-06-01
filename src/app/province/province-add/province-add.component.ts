import { Component, OnInit } from '@angular/core';
import {Province} from '../model/province';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProvinceService} from '../service/province.service';

@Component({
  selector: 'app-province-add',
  templateUrl: './province-add.component.html',
  styleUrls: ['./province-add.component.css']
})
export class ProvinceAddComponent implements OnInit {
  province: Province = {};
  provinceForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
  });
  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
  }
  addProvince() {
    if (this.provinceForm.invalid) {
      return;
    } else {
      this.provinceService.addNewProvince(this.provinceForm.value);
    }
  }
  get nameControl() {
    return this.provinceForm.get('name');
  }
}
