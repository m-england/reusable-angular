# Activity 1 - Decoupling the Models

## Goals
- Decouple the dessert and kitten models from their respective card components.

## Summary
One of the first steps to creating a reusable component is reducing its local dependencies. Models as inputs often introduce an unneeded coupling and the requirement that the model go anywhere the component will need to go.

## Steps
- Kitten Card
    1. Expand input of desert model by expanding the models properties into inputs ie. (@Input() name: string)
    2. Change html to remove kitten model and use newly created properties
    3. Change the list-container component by giving the component the individual inputs from the kitten model
- Dessert Card
    1. Repeat Steps above for dessert-card.component

