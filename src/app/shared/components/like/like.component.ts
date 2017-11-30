import { Component, OnInit ,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
selector: 'app-like',
templateUrl: './like.component.html',
styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  likes: number;

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incr(value: number) {
      this.likesChange.emit( this.likes + value );
  }

}
