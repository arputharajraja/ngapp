import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) { 

  }

  ngOnInit() {
    this.brandService.getBrands()
    .subscribe( (brands: any[]) => {
        this.brands = brands;
    });
  }
  
}
