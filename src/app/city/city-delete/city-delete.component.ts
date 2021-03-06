import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {ProvinceService} from '../../province/service/province.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {

  constructor(private cityService: CityService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = paraMap.get('id');
      this.deleteCity(id);
    });
  }
  ngOnInit() {
  }
  deleteCity(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'Xóa rồi là phải tạo lại đấy',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa luôn!',
      cancelButtonText: 'Từ từ, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.cityService.deleteCity(id).subscribe(() => {
          this.router.navigate(['/city']);
        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Xóa thành công !!!.',
          'success'
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.router.navigate(['/city']);
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }
}
