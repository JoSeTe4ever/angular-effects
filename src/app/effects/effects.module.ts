import { InjectionToken, NgModule, Inject, Type, Injector } from "@angular/core";
import { isObservable } from "rxjs/internal/util/isObservable";
import { EFFECT } from "./effects";

const EFFECTS_PROVIDERS = new InjectionToken('EFFECTS_PROVIDERS');

function isEffect(effect: any) {
  return effect[EFFECT];
}

@NgModule({})
export class EffectsModule {
  constructor(
    @Inject(EFFECTS_PROVIDERS) providers: Type<any>[],
    injector: Injector
  ) {
    for (const provider of providers) {
      const currentProvider = injector.get(provider);

      for (const effectFactory  of Object.values(currentProvider))
        if (isEffect(effectFactory)) {
          const functionFactory = effectFactory as Function;
          const factory = functionFactory();

          if (isObservable(factory)) {
            factory.subscribe();
          }
        }
    }
  }

  static register(providers: Type<any>[]) {
    return {
      ngModule: EffectsModule,
      providers: [
        {
          provide: EFFECTS_PROVIDERS,
          useValue: providers,
        },
      ],
    };
  }
}