import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import { FormBuilder,
         FormGroup, 
         FormControl, 
         Validators} from '@angular/forms';

 
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  brand: Brand = new Brand();

  form:FormGroup;
  brandNameControl: FormControl;
  
  constructor(private router: Router,
              private route:ActivatedRoute,
              private formBuilder: FormBuilder, 
              private brandService: BrandService) { 
                  
      this.brandNameControl = new FormControl("");
      this.form = formBuilder.group({
          "brandName" : this.brandNameControl
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id:number = params["id"];
      let name:string = params["name"];

      console.log("number is ", id);
      console.log("name is ", name);

      this.brandService.getBrand(id)
      .subscribe ( (brand: Brand) => {
        this.brand = brand;
      });

  });
  }

  saveBrand() {
    
  }

}


 