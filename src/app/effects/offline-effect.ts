import { Injectable } from "@angular/core";
import { fromEvent, tap } from "rxjs";
import { createEffect } from "./effects";

@Injectable({ providedIn: 'root' })
export class OfflineEffects {

    offline$ = createEffect(() =>
        fromEvent(window, 'offline').pipe(
            tap(() => { alert('no internet connection'); })
        )
    );

    constructor() { }
}