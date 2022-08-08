import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav(): void {
    this.show = !this.show;
    console.log('hey');
  }
}
