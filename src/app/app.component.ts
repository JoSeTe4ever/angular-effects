import { Component } from '@angular/core';
import { OfflineService } from './services/offline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sandbox';

  constructor() {}
}
