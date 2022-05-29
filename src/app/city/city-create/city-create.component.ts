import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {City} from '../model/city';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {ProvinceService} from '../../province/service/province.service';
import {Province} from '../../province/model/province';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  city: City = {};
  provinces: Province[] = [];
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    popular: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    area: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    description: new FormControl('', [Validators.required]),
    province: new FormControl('')
  });
  constructor(private cityService: CityService,
              private provinceService: ProvinceService) { }

  ngOnInit() {
    this.getAllProvince();
  }
  addCity() {
    if (this.cityForm.invalid) {
      return;
    } else {
      const city = this.cityForm.value;
      city.province = {
        id: city.province
      };
      this.cityService.addCity(city).subscribe(() => {
        Swal.fire('Thêm Thành Công !!!');
      });
      this.cityForm.reset();
    }
  }
  get nameControl() {
    return this.cityForm.get('name');
  }
  get popularControl() {
    return this.cityForm.get('popular');
  }
  get areaControl() {
    return this.cityForm.get('area');
  }
  get descriptionControl() {
    return this.cityForm.get('description');
  }
  getAllProvince() {
    this.provinceService.getAllProvince().subscribe((provinces) => {
      this.provinces = provinces;
    }, (error) => {
      alert(error);
    });
  }
}
