import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = "About";
  frameworks: any[] = [];

  constructor() {
      this.frameworks = ['Angular', 'Node', 'TypeScript'];
  }

  ngOnInit() {
      
  }

  addFramework(name: string) {
    this.frameworks.push(name);
  }

  empty() {
    this.frameworks = [];
  }
  
  ngOnDestroy() {
        console.log("about destroy called");
  }

}