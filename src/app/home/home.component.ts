import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

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
    return this.httpClient.get('assets/marked.md', { responseType: 'text' });
  }

}
