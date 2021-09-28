import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.less']
})
export class DocsComponent implements OnInit {


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
    return this.httpClient.get('assets/docs.md', { responseType: 'text' });
  }
}
