import { Component } from '@angular/core';

@Component({
  selector: 'appschell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appschell';

  // links for the sidebar
  links = [
    { path: '/', title: 'Home' },
    { path: '/login', title: 'Login' }
  ]
}
