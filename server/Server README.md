<div align="center">

<h1>Clockwork</h1>
<p>Server Side of Clockwork</p>

</div>

## Description 
This is server side of Clockwork. Clockwork is candidate management application. 

<br />

## Server
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

## Database
### ER Diagram
<div align="center"> 
  <img src="https://github.com/Sa-YoorHeadley/clockwork/blob/main/assets/server/ER Diagram.png?raw=true" alt="screenshot" />
</div>

**ALL RELATIONS MUST BE FOLLOWED AS PER ER DIAGRAM ABOVE**
<br />
<br />

### Tables

- #### **Applications**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|idApplications|int(11)|NO|PRI| |auto_increment|
|OpeningId|int(11)|NO|MUL| | |
|ApplicationDate|date|NO| | | |
|ApplicationPersonId|int(11)|YES|MUL| | |
|ApplicationStatus|varchar(20)|NO| | | |
|assignedRecruiter|int(11)|YES|MUL| | |


- #### **Contacts**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|contactID|int(11)|NO|PRI| |auto_increment|
|ContactRecruiterId|int(11)|YES|MUL| | |
|ContactStatus|varchar(20)|NO| | | |
|ContactApplicationsId|int(11)|YES|MUL| | |
|ContactTimeStamp|datetime|YES| | | |


- #### **Locations**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|contactID|int(11)|NO|PRI| |auto_increment|
|ContactRecruiterId|int(11)|YES|MUL| | |
|ContactStatus|varchar(20)|NO| | | |
|ContactApplicationsId|int(11)|YES|MUL| | |
|ContactTimeStamp|datetime|YES| | | |



- #### **Openings**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|idOpenings|int(11)|NO|PRI| |auto_increment|
|city|varchar(25)|NO| | | |
|state|varchar(25)|NO| | | |
|position|varchar(50)|NO| | | |
|manager|varchar(40)|NO| | | |
|managerEmail|varchar(100)|NO| | | |
|idLocations|int(11)|NO|MUL| | |



- #### **Persons**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|idOpenings|int(11)|NO|PRI| |auto_increment|
|city|varchar(25)|NO| | | |
|state|varchar(25)|NO| | | |
|position|varchar(50)|NO| | | |
|manager|varchar(40)|NO| | | |
|managerEmail|varchar(100)|NO| | | |
|idLocations|int(11)|NO|MUL| | |


- #### **Positions**
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


- #### **Recruiters**
|Field|Type|Null|Key|Default|Extra|
|:----|:----|:----|:----|:----|:----|
|idRecruiters|int(11)|NO|PRI| |auto_increment|
|recruiterFirstName|varchar(20)|NO| | | |
|recruiterLastName|varchar(20)|NO| | | |
|email|varchar(100)|NO| | | |
|assignedAccounts|int(11)|YES| | | |
|loginCredentials|varchar(50)|YES| | | |

<br />
<br />

<!-- TechStack -->
## Tech Stack
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>MySQL</li>
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

<br />

## Prerequisites

1. ### Install Node JS
    Refer to https://nodejs.org/en/ to install nodejs

2. ### Create database and .env file
    Refer to **Database** section of the README for the ER Diagram.

3. ### Create environment variables in .env file

    ```bash
    cd server/
    touch .env
    ```
    Variables required:
    - **DB_USER** - Username used to access database
    - **DB_PASS** - Password associated with username
    - **DB_NAME** - Name given to the database
    - **DB_HOST** - IP Address/URL of database
  
  <br />
    Example
  
    DB_USER=root
    DB_PASS=password
    DB_NAME=mydb
    DB_HOST=127.0.0.1

<br />

<!-- Run Locally -->
## Run Locally

Clone the project

```bash
git clone https://github.com/Sa-YoorHeadley/clockwork.git
```

Go to the project directory

```bash
cd Clockwork/server
```

Install all the npm packages. 

```bash
npm install
```

In order to run the application type the following command

```bash
npm start
```

The Application Runs on **localhost:3001**

<br />

<!-- Acknowledgements -->
## Acknowledgements

- [GldnArms](https://github.com/GldnArms)
- [Cododev for Pagination Solution](https://www.youtube.com/watch?v=vP9fOEAlo74)