require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const pagination = require("./middleware/pagination.js");
const bodyParser = require("body-parser");

// CREATE AND TEST CONNECTION
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // socketPath: process.env.INSTANCE_CONNECTION_NAME
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as thread id: " + connection.threadId);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;
// LISTEN
app.listen(3001, () => {
  console.log(`Server running on port ${port}`);
});

// ROOT FUNCTION
app.get("/", async (req, res) => {
  res.json({ status: "Running" });
});

//GET ALL CANDIDATES PAGINATED
app.get("/candidates", pagination("Persons"), async (req, res) => {
  res.json(res.results);
});

//GET ALL APPLICATIONS PAGINATED
app.get("/applications", pagination("Applications"), async (req, res) => {
  res.json(res.results);
});

//GET ALL CONTACTS PAGINATED
app.get("/contacts", pagination("Contacts"), async (req, res) => {
    res.results.data =  res.results.data.map(contact => {
        delete contact.loginCredentials
        return contact
    })
    res.json(res.results);
});

//GET APPLICATION BY ID
app.get("/applications/:id", async (req, res) => {
  const { id } = req.params;
  const query = `SELECT *
    FROM Applications
    JOIN Openings 
        ON Applications.OpeningId=Openings.idOpenings
    JOIN Persons 
        ON Persons.PersonID=Applications.ApplicationPersonId
    WHERE Applications.idApplications = ?`;
  connection.query(query, id, (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results" });
    } else {
      res.json(...results);
    }
  });
});

// CREATE CANDIDATE OR RETURN CANDIDATE ID
app.post("/candidate/create", (req, res) => {
  const { phoneNumber, lastName, firstName, emailAddress, city, state } =
    req.body.newEmployee;

  const checkQuery = `select * from Persons 
    where  Persons.firstName = ? AND Persons.lastName = ? AND Persons.emailAddress = ?`;
  connection.query(
    checkQuery,
    [firstName, lastName, emailAddress],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        insertNewCandidate();
      } else {
        res.json(results[0].PersonID);
      }
    }
  );

  //if results null proceed else return ID
  function insertNewCandidate() {
    const query = `INSERT INTO Persons(currentStatus, lastName, firstName, emailAddress, city, state,phoneNumber)
        VALUES (?,?,?,?,?,?,?)
        `;
    connection.query(
      query,
      ["Pending", lastName, firstName, emailAddress, city, state, phoneNumber],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json(results.insertId);
      }
    );
  }
});

// CREATE APPLICATION
app.post("/application/create", (req, res) => {
  const DEFAULT_STATUS = "Pending";
  const ApplicationDate = new Date();
  const { OpeningId, ApplicationPersonId, assignedRecruiter } =
    req.body.newEmployee;

  const query = `INSERT INTO Applications (OpeningId, ApplicationDate, ApplicationPersonId, ApplicationStatus, assignedRecruiter)
    VALUES (?,?,?,?,?)
    `;
  connection.query(
    query,
    [
      OpeningId,
      ApplicationDate,
      ApplicationPersonId,
      DEFAULT_STATUS,
      assignedRecruiter,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        res.json({ status: "No Results" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// MAJOR BUG FIX - Use JWT

// Get Recruiter by ID
app.get("/recruiters/:emailAddress&:password", (req, res) => {
  const { emailAddress, password } = req.params;
  const query = `SELECT idRecruiters, recruiterFirstName, recruiterLastName, email, assignedAccounts
    FROM Recruiters
    WHERE Recruiters.email = ? AND  Recruiters.loginCredentials = ?`;
  connection.query(query, [emailAddress, password], (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results" });
    } else {
      res.json({...results[0], login: true});
    }
  });
});

//DELETE CANDIDATE
app.delete("/candidate/delete/:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM Persons WHERE PersonID = ?`;
  connection.query(query, id, (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results" });
    } else {
      res.json(results[0]);
    }
  });
});

//UPDATE CANDIDATE
app.put("/candidate/update/:id", (req, res) => {
  const { id } = req.params;
  const { currentStatus, lastName, firstName, emailAddress, city, state } =
    req.body.updatedEmployee;
  const query = `UPDATE Persons SET currentStatus=?, lastName=?, firstName=?, emailAddress=?, city=?, state=? WHERE PersonID=?`;
  connection.query(
    query,
    [currentStatus, lastName, firstName, emailAddress, city, state, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        res.json({ status: "No Results" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// CREATE CONTACT
app.post("/contact/create", (req, res) => {
  const ContactTimeStamp = new Date();
  const ContactRecruiterId = req.body.formData.idRecruiters;

  const { contactStatus, idApplications } = req.body.formData;
  const query = `INSERT INTO Contacts(ContactTimeStamp, ContactStatus, ContactRecruiterId, ContactApplicationsId)
    VALUES (?,?,?,?)
    `;
  connection.query(
    query,
    [ContactTimeStamp, contactStatus, ContactRecruiterId, idApplications],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        res.json({ status: "No Results" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// Update Application
app.put("/application/update/:id", (req, res) => {
  const { id } = req.params;
  const { contactStatus } = req.body.formData;

  const query = `UPDATE Applications SET ApplicationStatus=? WHERE idApplications=?`;
  connection.query(query, [contactStatus, id], (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results", id });
    } else {
      res.json(results[0]);
    }
  });
});

// GET OPENINGS
app.get("/openings", async (req, res) => {
  const { city, state, position } = req.query;
  let query;
  if (city && state && position) {
    query = `SELECT *
            FROM Openings
            WHERE Openings.city = ? AND Openings.state = ? AND Openings.position = ?`;
  } else {
    query = `SELECT *
            FROM Openings`;
  }

  connection.query(query, [city, state, position], (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results" });
    } else {
      res.json(results);
    }
  });
});

// CREATE POSITION
app.post("/position/create", (req, res) => {
  const {
    streetAddress,
    city,
    state,
    phoneNumber,
    locationAliases,
    emailAddress,
    name,
  } = req.body.newLocation;
  const query = `INSERT INTO Positions ( streetAddress, city, state, phoneNumber, locationAliases, emailAddress, name)
    VALUES (?,?,?,?,?,?,?)
    `;
  connection.query(
    query,
    [
      streetAddress,
      city,
      state,
      phoneNumber,
      locationAliases,
      emailAddress,
      name,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        res.json({ status: "No Results" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// CREATE OPENING
app.post("/opening/create", (req, res) => {
  const { city, state, position, manager, managerEmail, idLocations } =
    req.body.newOpening;
  const query = `INSERT INTO Openings (city, state, position, manager, managerEmail, idLocations)
    VALUES (?,?,?,?,?,?)
    `;
  connection.query(
    query,
    [city, state, position, manager, managerEmail, idLocations],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (!results[0]) {
        res.json({ status: "No Results" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

//GET Locations
app.get("/locations", async (req, res) => {
  const query = `SELECT *
    FROM Locations
    `;
  connection.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    if (!results[0]) {
      res.json({ status: "No Results" });
    } else {
      res.json(results);
    }
  });
});

// //GET Openings
// app.get('/openings', async (req, res) =>{

//     const query = `SELECT * FROM Openings`
//     connection.query(query, (error, results) =>{
//         if(error){
//             throw error
//         }
//         if(!results[0]){
//             res.json({status: 'No Results'})
//         } else {
//             res.json(results)
//         }
//     })
// })
