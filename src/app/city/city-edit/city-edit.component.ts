import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Province} from '../../province/model/province';
import {CityService} from '../service/city.service';
import {ProvinceService} from '../../province/service/province.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  selectedFile = new File(['none'], 'filename.jpg');
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    popular: new FormControl(),
    area: new FormControl(),
    image: new FormControl(),
    description: new FormControl(),
    province: new FormControl()
  });
  id: number;
  provinces: Province[] = [];
  image = null;
  constructor(private cityService: CityService,
              private provinceService: ProvinceService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      this.id = + paraMap.get('id');
      this.getCityById(this.id);
    });
  }
  ngOnInit() {
    this.getAllProvince();
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    this.image = document.getElementById('output');
    this.image.src = URL.createObjectURL(event.target.files[0]);
  }
  getCityById(id: number) {
    return this.cityService.getCityById(id).subscribe((city) => {
      this.image = city.image;
      this.cityForm = new FormGroup({
        id: new FormControl(city.id),
        name: new FormControl(city.name),
        popular: new FormControl(city.popular),
        area: new FormControl(city.area),
        image: new FormControl(),
        description: new FormControl(city.description),
        province: new FormControl(city.province.id)
      });
    });
  }

  updateCity(id: number) {
    if (this.cityForm.invalid) {
      return;
    } else {
      const city: FormData = new FormData();
      city.append('id', this.cityForm.get('id').value);
      city.append('name', this.cityForm.get('name').value);
      city.append('popular', this.cityForm.get('popular').value);
      city.append('area', this.cityForm.get('area').value);
      city.append('image', this.selectedFile);
      city.append('description', this.cityForm.get('description').value);
      city.append('province', this.cityForm.get('province').value);
      this.cityService.updateCity(id, city).subscribe(() => {
        Swal.fire('Cập Nhập Thành Công !!!');
        this.router.navigate(['/city']);
      });
    }
  }
  getAllProvince() {
    this.provinceService.getAllProvince().subscribe((provinces) => {
      this.provinces = provinces;
    }, (error) => {
      alert(error);
    });
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
}
