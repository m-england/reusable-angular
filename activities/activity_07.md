# Activity 7 - Sharing Component in a Library

## Goal
- Create a shareable library for the common-card-two and reuse it

### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_06`

## Summary
Reusability can be useful inside of a single app, but the real power of it lies in being able to reuse between applications.  Separating reusable presentational components into libraries gives you the ability to easily share the components in multiple ways.

## Steps

#### Create a new library
    1. `ng g library @libs/card-lib --skip-install`
    2. Remove the sample `card-lib.component` and `card-lib.service`
    3. Cleanup the `card-lib.module.ts` and `public-api.ts`
    4. Import CommonModule into the `card-lib.module`

#### Move common-card-two to the new library
    1. Move the common-card-two from primary app to card-lib library
    2. Fix both module files
    3. Import the `CardLibModule` into the primary app

#### Update import paths
    1. Update the Typescript paths in `tsconfig.json` so that `@libs/card-lib` that references the `card-lib`'s directory
    2. Update the primary app module to import `CardLibModule` from `@libs/card-lib` instead of a hard-coded path

#### Reuse the component in secondary application
    1. Run the secondary app `ng serve secondary`
    2. Import the `CardLibModule` into the secondary app
    3. Replace the `truck-card.component` with our reusable one


### Reference
[Typescript Paths](https://www.typescriptlang.org/tsconfig#paths)
