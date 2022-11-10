<div id="header" align="center">
  <img src="src/assets/images/logo/fetch-logo.png" width="600"/>

  <h3>Frontend Take-Home Exercise</h3>

  ---
</div>

  ## Description:

  Your task is to build a webpage with a user creation form. The form should take the following required inputs:

  * Full Name
  * Email
  * Password 
  * Occupation
  * State
  
  Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

  ```{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```

You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:

```
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
```

The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.


## Table of Contents:

  * [Technologies Used](#technologies-used)
  * [Concept](#concept)
  * [Usage](#usage)
  * [Contact](#contact)

## Technologies Used

 <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" style="max-width: 100%;">
 </a>
 <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS Badge" style="max-width: 100%;">
 </a>
 <a target="_blank" rel="noopener noreferrer" href="https://jestjs.io/docs/getting-started">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest Badge" style="max-width: 100%;">
 </a>
 <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/">
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge" style="max-width: 100%;">
 </a>

## Concept:

### Mobile Design

![Fetch Mobile Design](./src/assets/images/design/fetch-app-prototype.jpg)

### Website Design

![Fetch Web Design](./src/assets/images/design/fetch-website-prototype.jpg)

### Site Analysis

![Fetch Site Analysis](./src/assets/images/design/fetch-site-analysis.jpg)
 

## Usage:

A user can sign up by filling in the input fields: First name, last name, occupation, state, email, and password; and cannot submit the form without completing the entire form. Occupation and State dropdown options are from returned endpoint GET request.

Form includes password validation feedback for password requirements and feedback on a successful submission POST request to the same endpoint.

## Contact:

### Brianna Woodruff  

briannaewoodruff@gmail.com

<a target="_blank" rel="noopener noreferrer" href="https://github.com/briannawoodruff">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="max-width: 100%;">
</a>
<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/briannaewoodruff/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="max-width: 100%;">
</a>
<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/briannaewoodruff/">
    <img src="https://img.shields.io/badge/Portfolio-EA4C89?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio" style="max-width: 100%;">
</a>
