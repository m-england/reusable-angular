# Activity 3 - Single-Slot Content Projection

## Goal
- Make a reusable component using content projection

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_01`

## Summary
The angular way for wrapping html component inside another component is by using single-slot content projection.  It allows for any html written between the component's opening and closing tags to be rendered inside the child component with the use of ng-content.

## Steps
- Make a common card using content projection
    1. Create a new component using the angular cli 
      `ng g component common-card-two`
    2. Add inputs: name and imageUrl to the `component.ts`
    3. Add output emitter for button click
    4. Copy html from kitten card to the html file of common-card-two
    5. Replace content unique to kitten-card with ng-content:
        ```html
            Cuteness: {{ kitten.cuteness }}<br />
            Age: {{ kitten.age }}<br />
            Favorite Toy: {{ kitten.favoriteToy }}<br />
            Fixed: {{ kitten.spayedOrNeutered }}<br />
        ```
        with tag  ` <ng-content></ng-content> `
    6. Include styling from the original kitten-card
    7. Use common-card-two in list-container for kittens.
    8. Add the above content that was deleted as the content of the card
    9. Replace dessert card with common-card-two


### Reference
[Angular Single Slot Content Projection](https://angular.io/guide/content-projection#single-slot-content-projection)
