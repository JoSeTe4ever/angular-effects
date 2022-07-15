import { Observable } from "rxjs";

export const EFFECT = Symbol('EFFECT');

export function createEffect<T>(source: () => Observable<T> | void) {
  Object.defineProperty(source, EFFECT, { value: true });

  return source;
}