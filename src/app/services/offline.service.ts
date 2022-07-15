import { Injectable } from "@angular/core";
import { fromEvent, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class OfflineService {

  constructor() {
    fromEvent(window, 'offline').pipe(
      tap(() => {
        alert('There is no internet connection');
      })
    ).subscribe()
  }
}