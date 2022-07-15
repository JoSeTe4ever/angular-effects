# angular-effects
Global functionality through effects in Angular https://netbasal.com/spring-cleaning-time-dont-let-global-functionality-clutter-up-your-angular-app-d013faa71a

LEARNING BY DOING!!!

In most applications, we come across some functionality that we want to run globally. At this point, we’re often pondering the question of where we should call it from.

*USUALLY THE APPLICATION COMPONENT WHICH IS NOT CONVINIENT*

Moreover, there will be more global functionality in the real world, such as keep-alive, analytics events, authentication events, navigation events, etc. Putting everything in an application component isn’t the best option.

Let’s create an EffectModule that lets us register effects and invoke them automatically when Angular instantiates the module:
# Sandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0-next.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
