# Activity 4 - Multi-Slot Content Projection

## Goal
- Use multi-slot content projection to add a section of our reusable card to display flavor text above the vote button

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_03`

## Summary
The last example of content projection is great if all that changes in the component is contained in a single section of html. But in the real world the content is going to be more spread out. An example of this might be a component where there are multiple columns and the consuming apps show different information in those columns. This is where multi-slot content projection is useful.

## Steps
- Update common-card-two by adding another ng-content as a question above the button
    1. Add new `<ng-content select="[my-attribute]"></ng-content>` above the button
    2. Add a new element to the `list-container` kitten-card html, giving it an attribute with the name you selected
    3. Verify your new text shows up
    4. Give the dessert-card custom flavor text

### Reference
[Angular Multi-slot Content Projection](https://angular.io/guide/content-projection#multi-slot-content-projection)
