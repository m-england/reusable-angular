# Activity 6

## Goal
- Create a shareable library for the common-card-two
- Reuse it

#### Catch Up
To catch up to this point in the workshop, run:
  `git checkout activity_05`

#### Steps
- Create a new library
    1. `ng g library @libs/card-lib --skip-install`
    2. Remove the sample `card-lib.component` and `card-lib.service`
    3. Cleanup the `card-lib.module.ts` and `public-api.ts`
- Move common-card-two to the new library
    1. Copy common-card-two from primary app to card-lib
    2. Fix the module files
    3. Import the `CardLibModule` into the primary app
- Update import paths
    1. Update the Typescript paths in `tsconfig.json` so that `@card-lib` that references the `card-lib`'s directory    
- Reuse the component in secondary application
    1. Run the secondary app `ng serve secondary`
    2. Import the `CardLibModule` into the secondary app
    3. Replace the `truck-card.component` with our reusable one
