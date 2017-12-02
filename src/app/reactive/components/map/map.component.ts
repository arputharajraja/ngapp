import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const second$ = Observable.interval(5000);

    second$
     .mergeMap(x => {
      console.log(x);
      return  Observable.of(x);
    })
    .subscribe ( x => {
      console.log('x is ', x);
    });


    const words = `Row row row your boat gently down the stream merrily merrily merrily merrily life is but a dream`.split(' ');

    const numWords = words.length;
    const singer$ = Observable
    .interval(500) // emit a value every half second
    .scan(x => x + 1) // record the count 
    .map(count => count % numWords) // convert into a resetting index
    .map(index => words[index]) // map to the word

    //singer$.subscribe(console.log);

    // const round$ = Observable
    // .interval(4500)
    // .do (() => {
    //   console.log("***");
    // })
    // .flatMap(() => singer$)

    // round$.subscribe(console.log)

    const brokenRecord$ = Observable
    .interval(4500 * 4)
    .switchMap(() => singer$);

    brokenRecord$.subscribe(console.log)
  }

}
