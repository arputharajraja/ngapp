import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Brand } from '../models/brand';



@Injectable()
export class BrandService {

  constructor(private httpClient: HttpClient) { 

  }

  getBrands(): Observable<Brand[]> {
    return this.httpClient
           .get<Brand[]> (`${environment.apiEndPoint}/api/brands`);
  }

  getBrand(id: any): Observable<Brand> {
    return this.httpClient
    .get<Brand> (`${environment.apiEndPoint}/api/brands/${id}`);
  }

}
