# Activity 6 - Template Partials as Inputs

## Goal
- To allow custom footer templates in the reusable card component

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_05`

## Summary
Angular templates can be passed along as inputs to their child components.

## Steps
1. Add a TemplateRef input property to the common card component
2. Build a new template in the list-container component for the kitten footer
    ```html
      <ng-template #kittenFooter>
        <span button-description>Do you think this cat is cute?</span>
        <button class="secondary" (click)="buttonClick.emit()">
          Vote for Kittens!
        </button>
      </ng-template>
    ```
3. Pass the new template reference into the `<app-common-card [footerTemplate]="kittenFooter"`
4. Update the ngTemplateOutput on common-card to use the footerTemplate if provided, or default
  ` *ngTemplateOutlet="footerTemplate ? footerTemplate : defaultFooter"`
5. Fix button click in new kittenFooter template

### Reference
[Angular Conditional Content Projection](https://angular.io/guide/content-projection#conditional-content-projection)

[Angular TemplateRef](https://angular.io/api/core/TemplateRef)
