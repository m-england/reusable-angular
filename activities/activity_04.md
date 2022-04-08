# Activity 4

## Goal
- Make a reusable component using multi-slot content projection

#### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_03`

#### Steps
- Update common-card-two by adding another ng-content as a question above the button
    1. Any kind of css selector can be used we will use an attribute tag.
    2. Add new ```<ng-content select="[my-attribute]"></ng-content>``` above the button.
    3. Add a new span to the list-container html giving it the attribute you created above.
    4. The content of your span should now show above the button.

### Reference
[Angular Multi-slot Content Projection](https://angular.io/guide/content-projection#multi-slot-content-projection)
