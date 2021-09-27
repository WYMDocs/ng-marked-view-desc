import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-marked-preivew-docs';
  github = 'https://github.com/JackYumg/ng-plugins/tree/main/projects/ng-marked-preview';
  issue = 'https://github.com/JackYumg/ng-plugins/issues';
  constructor(
    private router: Router
  ) {

  }
  gotoPage(path: string): void {
    if (path === 'sourceCode') {
      window.open(this.github , '__blank');
    } else {
      this.router.navigate([path]);
    }
  }
}
