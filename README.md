<div align="center">

  <h1>Clockwork</h1>
  
  <p>
    Clockwork is candidate management application. 
  </p>
  
<!-- Badges -->
<p>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Sa-YoorHeadley/Clockwork" alt="last update" />
  </a>
  <a href="https://github.com/Sa-YoorHeadley/Clockwork/issues/">
    <img src="https://img.shields.io/github/issues/Sa-YoorHeadley/Clockwork" alt="open issues" />
  </a>
</p>
</div>

<br />

## Description 
Clockwork is a candidate management application or CMA aimed to amalgamate parts of the workflow used by recruiters and hiring managers in the form of a dashboard. Clockwork implements a user interface made with React and SCSS supplied by backend data from an Express API and MySQL database.
<br />
*The following README is a combination of the [Client](https://github.com/Sa-YoorHeadley/Clockwork/blob/main/client/Client%20README.md) and [Server](https://github.com/Sa-YoorHeadley/Clockwork/blob/main/server/Server%20README.md) README files.*

## Features - Client

### Login Page
- **Login** - used to bring up a modal that can be used to sign in to gain access to the CMA.  

<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/loginpage/Preview-Login-Page.PNG?raw=true" alt="screenshot" />
</div>

- **Login Modal** - used to modal that can be used to sign in to gain access to the CMA. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/loginpage/Preview-Login-Page-Modal.PNG?raw=true" alt="screenshot" />
</div>
<br />

### Homepage

**\* - Non functional**

#### **Header**:
  - **Logout** - used to change logout of the CMA and redirect you to the login page. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Header.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **Ribbon**:
  - **Result Filter** - used to change database. 
  - **Result Limiter** - used to change database. 
  - **Refresh** - used to refresh data for current list. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Ribbon.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **Navbar** - List of options the candidate can select:
- \* **Select Database** - used to change database. 
- **Lists** - used to show the Candidates, Contacts and Applications
- \* **Parse Candidates** - used to get a list of new applications from candidates.
- **New Position** - brings up a modal that can be used to create a new position for new positions to be linked to.
- **New Opening** - brings up a modal that can be used to create a new open opening for candidates to apply to.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Navbar.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **Candidate List**
List of candidates that have applied to a position before. 
- **Delete** - button that can be used to delete targeted candidate.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Candidate-List.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **Contact List**
List of candidates that have been contacted. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Contact-List.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **Application List**
List of candidates that have applied for positions but have not been contacted yet. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Application-List.PNG?raw=true" alt="screenshot" />
</div>

- **Contact** - brings up a modal that can be used to submit data after candidate is contacted.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Application-List-Contact.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **New Position**
Modal that can be used to create a new position for new positions to be linked to. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-New-Position.PNG?raw=true" alt="screenshot" />
</div>
<br />

#### **New Opening**
Modal that can be used to create a new open opening for candidates to apply to. 
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-New-Opening.PNG?raw=true" alt="screenshot" />
</div>
<br />


#### **Pagination** - List of pages of data with buttons to change them. Number of pages is based on the limit set in the ribbon and the amount of data available:
- **Start** - Takes you first to page 1.
- **Previous** - Takes you back to one page based on your current.
- ***Numbers*** - Takes you to page of the number selected.
- **Next** - Takes you forward by one page based on your current.
- **End** - Takes you last page.
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/homepage/Preview-Homepage-Pagination.PNG?raw=true" alt="screenshot" />
</div>
<br />

> [Client Live URL](https://sa-yoorheadley.github.io/Clockwork/)

<br />
<br />

## Features - Server
### **Packages**:
- **express**
- **mysql**
<br />  

### **Middleware**:
- **dotenv**
- **cors**
- **body-parser**
- **pagination** - This is middleware created to paginate data.
<br />
  
### **Modules**:
- **find** - This module is used to retrieve the data from the SQL database based on the data and options provided. 
- **find** - This module is used to count the amount of documets retrieved by the "**find**" module. 
<br />
<br />

## Routes

### **Root**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/|`GET`|Checks if server is running|{status: "Running"}| |

### **Candidates**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/candidates|`GET`|Gets all candidates. Results are paginated.|{<br /> &nbsp; "PersonID": number,<br /> &nbsp; "firstName": string,<br /> &nbsp; "lastName": string,<br /> &nbsp; "emailAddress": string,<br /> &nbsp; "currentStatus": string,<br /> &nbsp; "city": string,<br /> &nbsp; "state": string,<br /> &nbsp; "phoneNumber": string<br />}| |
|/candidate/create|`POST`|Creates new candidate if candidate does not exist already.|{status: 'No Results'}|{<br />&nbsp;"firstName": string, <br />&nbsp;"lastName": string, <br />&nbsp;"emailAddress": string, <br />&nbsp;"phoneNumber": string <br />&nbsp;"city": string, <br />&nbsp;"state": string <br >}|
|/candidate/delete/:id|`DELETE`|Deletes application based on ID.|{status: 'No Results'}| |
|/candidate/update/:id|`PUT`|Updates application based on ID.|{status: 'No Results'}|{  <br /> &nbsp; "currentStatus": string,<br /> &nbsp; "lastName": string,<br /> &nbsp; "firstName": string,<br /> &nbsp; "emailAddress": string,<br /> &nbsp; "city": string,<br /> &nbsp; "state": string,<br />}|

### **Applications**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/applications|`GET`|Gets all applications and related data. Results are paginated.|{<br /> &nbsp; "idApplications": number, <br /> &nbsp; "OpeningId": number, <br /> &nbsp; "ApplicationDate": string <br /> &nbsp; "ApplicationPersonId": number, <br /> &nbsp; "ApplicationStatus": string, <br /> &nbsp; "assignedRecruiter": number, <br /> &nbsp; "idOpenings": number, <br /> &nbsp; "city": string, <br /> &nbsp; "state": string, <br /> &nbsp; "position": string, <br /> &nbsp; "manager": string, <br /> &nbsp; "managerEmail": string, <br /> &nbsp; "idLocations": number, <br /> &nbsp; "PersonID": number, <br /> &nbsp; "firstName": string, <br /> &nbsp; "lastName": string, <br /> &nbsp; "emailAddress": string, <br /> &nbsp; "currentStatus": string, <br /> &nbsp; "phoneNumber": string<br />}| |
|/applications/:id|`GET`|Gets application by ID and related data.| {<br /> &nbsp; "idApplications": number, <br /> &nbsp; "OpeningId": number, <br /> &nbsp; "ApplicationDate": string <br /> &nbsp; "ApplicationPersonId": number, <br /> &nbsp; "ApplicationStatus": string, <br /> &nbsp; "assignedRecruiter": number, <br /> &nbsp; "idOpenings": number, <br /> &nbsp; "city": string, <br /> &nbsp; "state": string, <br /> &nbsp; "position": string, <br /> &nbsp; "manager": string, <br /> &nbsp; "managerEmail": string, <br /> &nbsp; "idLocations": number, <br /> &nbsp; "PersonID": number, <br /> &nbsp; "firstName": string, <br /> &nbsp; "lastName": string, <br /> &nbsp; "emailAddress": string, <br /> &nbsp; "currentStatus": string, <br /> &nbsp; "phoneNumber": string<br />}| |
|/application/create|`POST`|Creates new application.|{status: 'No Results'}|{ <br /> &nbsp; "OpeningId": number, <br /> &nbsp; "ApplicationPersonId": number, <br /> &nbsp; "assignedRecruiter": number<br />}|
|/application/update/:id|`PUT`|Updates application's status based on ID.|{ <br /> &nbsp; status: 'No Results', <br /> &nbsp; id: number<br />}|{"contactStatus": string}|

### **Contacts**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/contacts|`GET`|Gets all contacts and related data. Results are paginated.|{<br /> &nbsp; "contactID": number,<br /> &nbsp; "ContactRecruiterId": number,<br /> &nbsp; "ContactStatus": string,<br /> &nbsp; "ContactApplicationsId": number,<br /> &nbsp; "ContactTimeStamp": string,<br /> &nbsp; "idApplications": number,<br /> &nbsp; "OpeningId": number,<br /> &nbsp; "ApplicationDate": string,<br /> &nbsp; "ApplicationPersonId": number,<br /> &nbsp; "ApplicationStatus": string,<br /> &nbsp; "assignedRecruiter": number,<br /> &nbsp; "PersonID": number,<br /> &nbsp; "firstName": string,<br /> &nbsp; "lastName": string,<br /> &nbsp; "emailAddress": string,<br /> &nbsp; "currentStatus": string,<br /> &nbsp; "city": string,<br /> &nbsp; "state": string,<br /> &nbsp; "phoneNumber": string,<br /> &nbsp; "idRecruiters": number,<br /> &nbsp; "recruiterFirstName": string,<br /> &nbsp; "recruiterLastName": string,<br /> &nbsp; "email": string,<br /> &nbsp; "assignedAccounts": number,<br /> &nbsp; "idOpenings": number,<br /> &nbsp; "position": string,<br /> &nbsp; "manager": string,<br /> &nbsp; "managerEmail": string,<br /> &nbsp; "idLocations": number<br />}| |
|/contact/create|`POST`|Creates new contact.|{status: 'No Results'}|{<br /> &nbsp; "idRecruiters": number,<br /> &nbsp; "contactStatus": string,<br /> &nbsp; "idApplications": number<br />}|

### **Recruiters**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/recruiters/:emailAddress&:password|`GET`|Gets recruiter data by email address and password.|{<br /> &nbsp; "idRecruiters": number,<br /> &nbsp; "recruiterFirstName": string,<br /> &nbsp; "recruiterLastName": string,<br /> &nbsp; "email": string,<br /> &nbsp; "assignedAccounts": number,<br /> &nbsp; "login": boolean<br />}| |

### **Openings**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/openings|`GET`|Gets all openings. If given city, state and positions as a query it returns found value, if not returns all values|{<br /> &nbsp; "idRecruiters": number,<br /> &nbsp; "recruiterFirstName": string,<br /> &nbsp; "recruiterLastName": string,<br /> &nbsp; "email": string,<br /> &nbsp; "assignedAccounts": number,<br /> &nbsp; "login": boolean<br />}| |
|/opening/create|`POST`|Creates new opening.|{status: 'No Results'}|{<br /> &nbsp;"city": string<br /> &nbsp;"state": string<br /> &nbsp;"position": string<br /> &nbsp;"manager": string<br /> &nbsp;"managerEmail": string<br /> &nbsp;"idLocations": number<br />}|

### **Position**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/position/create|`POST`|Creates new position.|{status: 'No Results'}| {<br /> &nbsp; "streetAddress": string,<br /> &nbsp; "city": string,<br /> &nbsp; "state": string,<br /> &nbsp; "phoneNumber": string,<br /> &nbsp; "locationAliases": string,<br /> &nbsp; "emailAddress": string,<br /> &nbsp; "name": string<br />}|
<br />

<!-- TechStack -->
## Tech Stack
  <ul>
    <li>Frontend - React, Javascript, SCSS, HTML</li>
    <li>Backend - Node.js, Express</li>
    <li>Database - MySQL</li>
  </ul>
 <br />

## Concepts Used
 <details>
 <summary>Express</summary>
  <ul>
    <li>Modules, Middleware, Packages</li>
    <li>Handling GET, POST, PUT and DELETE requests</li>
    <li>Getting data from route and query parameter and the body</li>
    <li>Using dotenv</li>
    <li>Connecting and querying MySQL database</li>
    <li>Pagination</li>
  </ul>
 </details>
 <details>
 <summary>SQL</summary>
  <ul>
    <li>Creating and modifying Databases, Tables and Relationships</li>
    <li>Queries</li>
  </ul>
 </details>
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

2. ### **Database**
    #### **ER Diagram**
    <div align="center"> 
    <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/server/ER Diagram.png?raw=true" alt="screenshot" />
    </div>

    **ALL RELATIONS MUST BE FOLLOWED AS PER ER DIAGRAM ABOVE**
    <br />
    <br />

    #### **Tables**

    - **Applications**
  
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |idApplications|int(11)|NO|PRI| |auto_increment|
    |OpeningId|int(11)|NO|MUL| | |
    |ApplicationDate|date|NO| | | |
    |ApplicationPersonId|int(11)|YES|MUL| | |
    |ApplicationStatus|varchar(20)|NO| | | |
    |assignedRecruiter|int(11)|YES|MUL| | |

    <br />

    - **Contacts**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |contactID|int(11)|NO|PRI| |auto_increment|
    |ContactRecruiterId|int(11)|YES|MUL| | |
    |ContactStatus|varchar(20)|NO| | | |
    |ContactApplicationsId|int(11)|YES|MUL| | |
    |ContactTimeStamp|datetime|YES| | | |

    <br />

    - **Locations**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |contactID|int(11)|NO|PRI| |auto_increment|
    |ContactRecruiterId|int(11)|YES|MUL| | |
    |ContactStatus|varchar(20)|NO| | | |
    |ContactApplicationsId|int(11)|YES|MUL| | |
    |ContactTimeStamp|datetime|YES| | | |


    <br />

    - **Openings**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |idOpenings|int(11)|NO|PRI| |auto_increment|
    |city|varchar(25)|NO| | | |
    |state|varchar(25)|NO| | | |
    |position|varchar(50)|NO| | | |
    |manager|varchar(40)|NO| | | |
    |managerEmail|varchar(100)|NO| | | |
    |idLocations|int(11)|NO|MUL| | |


    <br />

    - **Persons**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |idOpenings|int(11)|NO|PRI| |auto_increment|
    |city|varchar(25)|NO| | | |
    |state|varchar(25)|NO| | | |
    |position|varchar(50)|NO| | | |
    |manager|varchar(40)|NO| | | |
    |managerEmail|varchar(100)|NO| | | |
    |idLocations|int(11)|NO|MUL| | |

    <br />

    - **Positions**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |idPositions|int(11)|NO|PRI| |auto_increment|
    |streetAddress|varchar(50)|NO| | | |
    |city|varchar(25)|NO| | | |
    |state|varchar(25)|NO| | | |
    |phoneNumber|varchar(25)|NO| | | |
    |locationAliases|varchar(100)|NO| | | |
    |emailAddress|varchar(100)|NO| | | |
    |name|varchar(40)|NO| | | |

    <br />

    - **Recruiters**
    
    |Field|Type|Null|Key|Default|Extra|
    |:----|:----|:----|:----|:----|:----|
    |idRecruiters|int(11)|NO|PRI| |auto_increment|
    |recruiterFirstName|varchar(20)|NO| | | |
    |recruiterLastName|varchar(20)|NO| | | |
    |email|varchar(100)|NO| | | |
    |assignedAccounts|int(11)|YES| | | |
    |loginCredentials|varchar(50)|YES| | | |

    <br />
   
3. ### **Client**
    *Client will not run without server*

  - ### Install create-react-app
      Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

      ```bash
      npm install -g create-react-app
      ```
4.  ### **Server**
    *Server will not run without database*
    - ### Create database as per ER Diagram
        Refer to **Database** section of the README for the ER Diagram.

    - ### Create environment variables in .env file

        ```bash
        cd server/
        touch .env
        ```
        Variables required:
        - **DB_USER** - Username used to access database
        - **DB_PASS** - Password associated with username
        - **DB_NAME** - Name given to the database
        - **DB_HOST** - IP Address/URL of database

        Example 
        ```bash
        DB_USER=root
        DB_PASS=password
        DB_NAME=mydb
        DB_HOST=127.0.0.1
        ```
    <br />

<br />

<!-- Run Locally -->
## Run Locally

Clone the project

```bash
git clone https://github.com/Sa-YoorHeadley/Clockwork.git
```

Go to the client directory

```bash
cd Clockwork/client
```

Install all the npm packages. 

```bash
npm install
```

In order to start the client type the following command

```bash
npm start
```

Go to the server directory

```bash
cd Clockwork/server
```

Install all the npm packages. 

```bash
npm install
```

In order to start the server type the following command

```bash
npm start
```

>The Client Runs on **localhost:3000**

>The Server Runs on **localhost:3001**

<br />

## Issues
- This app is currently unfinished and it is unclear when, if ever it will be
- The UI for this app is not currently responsive and will not provide good user experience on smaller screens like tablets and phones.
- This app has not been thoroughly tested and may have bugs.
- Parts of this app may not use best practices in terms of coding and file and folder structure.  

<!-- Acknowledgements -->
## Acknowledgements
- [GldnArms](https://github.com/GldnArms)
- [Cododev for Pagination Solution](https://www.youtube.com/watch?v=vP9fOEAlo74)