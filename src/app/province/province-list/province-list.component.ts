import { Component, OnInit } from '@angular/core';
import {ProvinceService} from '../service/province.service';
import {Router} from '@angular/router';
import {Province} from '../model/province';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  provinces: Province[] = [];
  constructor(private provinceService: ProvinceService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProvinces();
  }
  getAllProvinces() {
    this.provinceService.getAllProvince().subscribe((data) => {
      this.provinces = data;
    }, (error => {
      alert(error);
    }));
  }
}
