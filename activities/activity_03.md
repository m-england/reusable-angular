# Activity 3 - Single-Slot Content Project

## Goal
- Make a reusable component using content projection

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_02`

## Summary
The angular way for wrapping html component inside another component is by using single-slot content projection.  It allows for any html written between the component's opening and closing tags to be rendered inside the child component with the use of ng-content.

## Steps
- Make a common card using content projection
    1. Create a new component using the angular cli 
      `ng g component common-card-two`
    2. Add inputs: name and imageUrl to the `component.ts`
    3. Copy html from kitten card to the html file of common-card-two
    4. Replace content unique to kitten-card with ng-content:
        ```ts
          Calories: {{ kitten.calories }}<br />
          Age: {{ kitten.age }}<br />
          Contains {{ kitten.hasChocolate ? "" : "no " }}chocolate<br />
          Stars: {{ kitten.stars }}<br />
        ```
        with tag  ` <ng-content></ng-content> `
    5. Include styling from the original kitten-card
    6. Use common-card-two in list-container for kittens.
    7. Add the above content that was deleted as the content of the card
    8. Replace desert card with common-card-two


### Reference
[Angular Single Slot Content Projection](https://angular.io/guide/content-projection#single-slot-content-projection)
