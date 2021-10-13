import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { delay, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-marked-preivew-docs';
  github = 'https://github.com/JackYumg/ng-plugins/tree/main/projects/ng-marked-preview';
  issue = 'https://github.com/JackYumg/ng-plugins/issues';
  themeColor = '#fff';

  colorEvent = new EventEmitter<string>();
  constructor(
    private router: Router
  ) {
    this.colorEvent.subscribe((res) => {
      document.documentElement.style.setProperty(`--main-bg-color`, res);
    });
  }
  gotoPage(path: string): void {
    if (path === 'sourceCode') {
      window.open(this.github, '__blank');
    } else {
      this.router.navigate([path]);
    }
  }

  colorChange($event: any): void {
    this.colorEvent.emit($event);
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }
}
