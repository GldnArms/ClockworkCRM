<div align="center">

<h1>Clockwork</h1>
<p>Client Side of Clockwork</p>

</div>

## Description 
This is client side of Clockwork. Clockwork is candidate management application. 

## User Instructions
1. **Server must be running on localhost:3001**
2. The user is greeted by the login page upon submitting correct credentials they are given access to CMA. 

<br />

## Login Page
- **Login** - used to bring up a modal that can be used to sign in to gain access to the CMA.  

<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/loginpage/Preview-Login-Page.PNG?raw=true" alt="screenshot" />
</div>

- **Login Modal** - used to modal that can be used to sign in to gain access to the CMA. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/loginpage/Preview-Login-Page-Modal.PNG?raw=true" alt="screenshot" />
</div>
<br />

## Homepage

**\* - Non functional**

### **Header**:
  - **Logout** - used to change logout of the CMA and redirect you to the login page. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Header.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **Ribbon**:
  - **Result Filter** - used to change database. 
  - **Result Limiter** - used to change database. 
  - **Refresh** - used to refresh data for current list. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Ribbon.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **Navbar** - List of options the candidate can select:
- \* **Select Database** - used to change database. 
- **Lists** - used to show the Candidates, Contacts and Applications
- \* **Parse Candidates** - used to get a list of new applications from candidates.
- **New Position** - brings up a modal that can be used to create a new position for new positions to be linked to.
- **New Opening** - brings up a modal that can be used to create a new open opening for candidates to apply to.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Navbar.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **Candidate List**
List of candidates that have applied to a position before. 
- **Delete** - button that can be used to delete targeted candidate.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Candidate-List.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **Contact List**
List of candidates that have been contacted. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Contact-List.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **Application List**
List of candidates that have applied for positions but have not been contacted yet. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Application-List.PNG?raw=true" alt="screenshot" />
</div>

- **Contact** - brings up a modal that can be used to submit data after candidate is contacted.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Application-List-Contact.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **New Position**
Modal that can be used to create a new position for new positions to be linked to. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-New-Position.PNG?raw=true" alt="screenshot" />
</div>
<br />

### **New Opening**
Modal that can be used to create a new open opening for candidates to apply to. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-New-Opening.PNG?raw=true" alt="screenshot" />
</div>
<br />


### **Pagination** - List of pages of data with buttons to change them. Number of pages is based on the limit set in the ribbon and the amount of data available:
- **Start** - Takes you first to page 1.
- **Previous** - Takes you back to one page based on your current.
- ***Numbers*** - Takes you to page of the number selected.
- **Next** - Takes you forward by one page based on your current.
- **End** - Takes you last page.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Pagination.PNG?raw=true" alt="screenshot" />
</div>
<br />

<br />

<!-- TechStack -->
## Tech Stack
  <ul>
    <li>React</li>
    <li>Javascript</li>
    <li>SCSS</li>
    <li>HTML</li>
  </ul>
 <br />

 ## Concepts Used
 <details>
 <summary>React</summary>
  <ul>
    <li>Fetching APIs using Axios, Reusable Components, Props, Conditional Rendering</li>
    <li>Data Manipulation (Filters, Mapping, Looping, Regular Expressions) and Display</li>
    <li>useState, useEffect, useRef, useCallback</li>
    <li>Class Toggling, Modals, Forms, Cards</li>
  </ul>
 </details>
 <details>
 <summary>SCSS</summary>
  <ul>
    <li>CSS Variables, Flexbox, Tables, Grid, Position</li>
    <li>Modal, Buttons, Cards, Animations</li>
  </ul>
 </details>

<br />

## Prerequisites

1. ### Install Node JS
    Refer to https://nodejs.org/en/ to install nodejs

2. ### Install create-react-app
    Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

    ```bash
    npm install -g create-react-app
    ```

3. ### Install and run server
    Refer to [Server README](https://github.com/Sa-YoorHeadley/Clockwork/blob/main/server/README.md) or [Main README](https://github.com/Sa-YoorHeadley/Clockwork#readme) to install and run server files

<br />

<!-- Run Locally -->
## Run Locally

Clone the project

```bash
git clone https://github.com/Sa-YoorHeadley/clockwork.git
```

Go to the project directory

```bash
cd Clockwork/client
```

Install all the npm packages. 

```bash
npm install
```

In order to run the application type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

<br />

<!-- Acknowledgements -->
## Acknowledgements

- [GldnArms](https://github.com/GldnArms)
- [Cododev for Pagination Solution](https://www.youtube.com/watch?v=vP9fOEAlo74)