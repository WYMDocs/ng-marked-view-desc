import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.less']
})
export class UsageComponent implements OnInit {

  content = '';
  desc = '';
  constructor(
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {
    this.getDoc().subscribe((e) => {
      this.desc = e;
    });
  }

  getDoc(): Observable<string> {
    return this.httpClient.get('assets/usage.md', { responseType: 'text' });
  }
}
