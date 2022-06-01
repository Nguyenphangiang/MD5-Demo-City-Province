import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {Router} from '@angular/router';
import {City} from '../model/city';

declare var $: any;
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  constructor(private cityService: CityService,
              private router: Router) { }

  ngOnInit() {
    this.showAllCity();
  }
  showAllCity() {
    this.cityService.getAll().subscribe((data) => {
      this.cities = data;
      $(function() {
        $('#cities').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': true,
          'ordering': true,
          'info': true,
          'pageLength' : 5,
          'autoWidth': false,
          'responsive': true,
        });
      });
    }, (error => {
      alert(error);
    }));
  }
}
