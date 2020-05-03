import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keyword: string = '';
  keywordLength: number = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  countWordLength(key: string) {
    if (key === 'Escape') {
      this.keyword = '';
    } else if (key === 'Backspace') {
      this.keyword = this.keyword.slice(0, this.keyword.length-1);
    } else if (key.length === 1) {
      this.keyword += key
    }
    this.keywordLength = this.keyword.length;
  }
}
