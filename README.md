# PersonalPortfolio

## Project Overview: 
This is a very lightweight version of my 2nd Language Learning project. Instead of focusing on live edits with authentication, I took inspiration from this other existing customizable portfolio template, https://github.com/saadpasta/developerFolio, which only requires a user to input their information via a JSON file. Therefore, this project will primarily be a frontend endeavor and focus on aesthetics, accessibility, and user-friendliness.

# Instructions 
1. If you do not currently have one, sign up for a Github account.
2. Make a copy of this template repository. Be sure to name your repository something you'll be alright having as part of the portfolio url! ![Screenshot 2024-08-02 5 41 42 PM](https://github.com/user-attachments/assets/ef8960db-5436-4f90-9ee7-a15b62d02aac)

3. Generate a Github Token (Github/Settings/Developer Settings/Personal Access Tokens -> from there, generate a token and copy to your clipboard)![Screenshot 2024-08-02 5 44 04 PM](https://github.com/user-attachments/assets/5b6f8cf3-8409-4fc9-9403-2e21ee3b9fc8)

4. Add the token to your repository's actions secrets (you repository's main page/Settings/Secrets & Variables and click on new repository secret. Make sure to name this secret GH_TOKEN (otherwise this will not deploy). ![Screenshot 2024-08-02 5 48 04 PM](https://github.com/user-attachments/assets/4df45c0f-f768-4602-9b8c-714a94342b02).

6. TAKE OWNERSHIP! This is your portfolio site, so let's make it yours! Navigate to the package.json file at the root of the project directory and replace "personal-protfolio" with your repository name. ![Screenshot 2024-08-09 12 55 11 AM](https://github.com/user-attachments/assets/356c302a-1665-4296-b3f9-e56ff267129d)

THEN, navigate to the angular.json file and also replace "personal-portfolio" with your repository's name. ![Screenshot 2024-08-09 12 57 21 AM](https://github.com/user-attachments/assets/53c83d29-8c37-4c03-b5bc-f6f5c1bfddd3)


5. CUSTOMIZE! You can now customize your portfolio by editing this file: src/customize/portfolio.ts. Be sure to follow the format provided in this file. 

6. Once your changes are saved, you can navigate to your repository's main page/settings/pages. Be sure to choose "Deploy From Branch" and choose the "prod" branch and "/root" ![Screenshot 2024-08-02 6 31 44 PM](https://github.com/user-attachments/assets/caf51678-6784-45a2-8883-6a32ae3f2ec6). After a few minutes, your customized portfolio site will be good to go!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Wireframe
![Screenshot 2024-07-19 2 31 02 PM](https://github.com/user-attachments/assets/7fa30c19-d734-44db-ae32-0e986f4a77d3)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Acknowledgements 
The concept for this project was inspiried by https://github.com/saadpasta/developerFolio.
The design was inspired by https://schlosser.io/
The github actions and pages tutorial https://www.youtube.com/@MonaCodeLisa
And https://github.com/JamesIves/github-pages-deploy-action for the amazing action
