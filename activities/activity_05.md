# Activity 5 - Conditional Content Projection

## Goal
- Use conditional content projection to display a default footer

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_04`

## Summary
The use of ng-template and ng-container allows content to be displayed when given a structural directive. Examples include using an ngIf to display a default template or an ngFor to render a template multiple times.

## Steps
1. Remove the ng-container for multi-slot projection
2. Insert an ng-template element with a template reference variable named  `defaultFooter`
3. Add the flavor text and button as content to the defaultFooter template
    * At this step, the template is not rendered or even placed into the dom yet as ng-template is a definition
    * ng-template[4] does not allow structural directives[2]
4. Insert the tag `<ng-container></ng-container>` within the footer element
    * ng-container can apply structural directives[2]
5. Add the `*ngTemplateOutlet` structual directive to the `ng-container` and link to defaultFooter template reference
    * ```<ng-container *ngTemplateOutlet="defaultFooter"></ng-container>```


### Reference
1. [Angular Conditional Content Projection](https://angular.io/guide/content-projection#conditional-content-projection)

2. [Angular structural directives](https://angular.io/guide/built-in-directives#built-in-structural-directives)

3. [Angular ng-container](https://angular.io/api/core/ng-container)

4. [Angular ng-template](https://angular.io/api/core/ng-template)

5. [Angular Template Reference Variables](https://angular.io/guide/template-reference-variables#syntax)
