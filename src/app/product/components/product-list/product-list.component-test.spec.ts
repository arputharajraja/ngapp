import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

import "rxjs/add/observable/of";

import { Observable } from "rxjs/Observable";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { APP_BASE_HREF } from '@angular/common';
import { fakeAsync } from "@angular/core/testing";
import { DataService } from "../../../shared/services/data.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";
 
let testProducts:Product[] = <Product[]> [
  {id: 1, name: 'Phone 1'}
];

 export class ProductServiceStub {
  getProducts():Observable<Product[]> {
     return Observable.of(testProducts);
  }
 }

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;

  let fixture: ComponentFixture<ProductListComponent>;
  
  let serviceStub: ProductServiceStub;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceStub
        },

        DataService,

         {
           provide: "apiEndPoint",
           useValue: "localhost"
         },

        {provide: APP_BASE_HREF, 
         useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        CommonModule,
        FormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve test data', fakeAsync(() => {
    serviceStub = fixture.debugElement.injector.get(ProductService);

    const spy = spyOn(serviceStub, 'getProducts').and.returnValue(
      Observable.of(testProducts)
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.products).toEqual(testProducts);
    expect(spy.calls.any()).toEqual(true);
  }));



  it('should resolve test empty list', fakeAsync(() => {
    serviceStub = fixture.debugElement.injector.get(ProductService);

    const spy = spyOn(serviceStub, 'getProducts').and.returnValue(
      Observable.of([])
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.products).toEqual([]);
    expect(spy.calls.any()).toEqual(true);
  }));




  it('should resolve test empty list', fakeAsync(() => {
    serviceStub = fixture.debugElement.injector.get(ProductService);

    const spy = spyOn(serviceStub, 'getProducts').and.returnValue(
      Observable.of(<Product[]> [{id: 1}, { id: 2},{ id: 3}])
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.products).toEqual(<Product[]> [{id: 1}, { id: 2},{ id: 3}]);
    expect(spy.calls.any()).toEqual(true);
  }));
  
  
});
