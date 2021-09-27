import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  content = '';
  constructor(
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {
    this.getDoc().subscribe((e) => {
      this.content = e;
    });
  }

  getDoc(): Observable<string> {
    return this.httpClient.get('assets/about.md', { responseType: 'text' });
  }
}
