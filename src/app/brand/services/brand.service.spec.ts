import { TestBed, inject, getTestBed } from '@angular/core/testing';


import { BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BrandService } from './brand.service';

// App
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Brand } from '../models/brand';
import { HttpClientModule } from '@angular/common/http';


// fdescribe('BrandService', () => {

//   let injector: TestBed;
//   let service: BrandService;
//   let httpMock: HttpTestingController;
  

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [BrandService]
//     });
//   });

//   injector = getTestBed();
//   service = injector.get(BrandService);
//   httpMock = injector.get(HttpTestingController);

//   it('should be created', async () => {
//     //expect(service).toBeTruthy();
//   });


// });


   
