# This repository contains the custom UI Components that can be used in any React Project.

### Publish a Package
To publish a package. 
    You have to Draft a new Release.
    Add new tags and then release it.
    (Note: Dont forget to change the version in package.json and then run npm i).

This will generate a new package with new version...

### Install a Package
To install a package in your project.
    1. Generate personal access token from github.
        Personal Access Token can be generated in github settings -> Developer Settings -> Access Token -> Generate Personal Access Token.
        Select read/write package option from the list and then generate,.
    2. Copy the key and paste it in .npmrc file
    ```
    //npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
    @infostacks:registry=https://npm.pkg.github.com
    ```
    3. Replace <YOUR_TOKEN> with your generated token.
    4. write the command for installation of package
    e.g
    ```
        npm i @infostacks/ui-components
    ```

    Hurray!!!!

### Check Component before Publishing
To check the ui of the component before publishin, either to check visibility or functionality.

    1. run command
    ```
        npm run storybook
    ```
    For further details: https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

HAPPY HACKING!!!!