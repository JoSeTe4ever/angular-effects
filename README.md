# angular-effects
Global functionality through effects in Angular https://netbasal.com/spring-cleaning-time-dont-let-global-functionality-clutter-up-your-angular-app-d013faa71a

LEARNING BY DOING!!!

In most applications, we come across some functionality that we want to run globally. At this point, we’re often pondering the question of where we should call it from.

Effects provides us with a way to isolate interactions, with the aforementioned services, from the components. 

*USUALLY THE APPLICATION COMPONENT WHICH IS NOT CONVINIENT*

Moreover, there will be more global functionality in the real world, such as keep-alive, analytics events, authentication events, navigation events, etc. Putting everything in an application component isn’t the best option.

Let’s create an EffectModule that lets us register effects and invoke them automatically when Angular instantiates the module:
