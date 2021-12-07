this folder contains all screens of the app
example - login page, register page, main route, profile page etc...

each page will have a folder
that folder will contain the main react component file that renders the page
and we can find in the folder also folders that only relevant for this screen
example -
components folder - that contains component only used in the screen
hooks folder - custom hooks related to the screen
utils - helper functions for this screen
types - file that contains all typescript interfaces/types for this screen
test - tests files of flows in the screen
style - style files related for the screen
and more...

example of structure:

> screens/login

      - login.tsx // main component
      - login.types.ts  // typescript
      - login.styles.ts // styled-component
      > /__tests__/login.test.ts
      > /hooks/useSubmitLogin.ts
      > /utils/validateLoginForm.ts
      > /components/
          > /nameInput/
            - nameInput.tsx
            - nameInput.style.ts
          > passwordInput/
            - passwordInput.tsx
            - passwordInput.style.ts
