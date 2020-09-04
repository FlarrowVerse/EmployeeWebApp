const express = require('express'); // import express framework
const app = express(); // creating express object
const fs = require('fs');

// data
const employees = require('./employee-data.json');



// finding an employee
function findEmployee(requestedEmpId) {
  var employee = {};
  for (var i = 0; i < heroes.length; i++) {
    if (requestedEmpId == heroes[i].id) {
      employee = {id: employees[i].id, name: employees[i].name};
    }
  }
  return employee;
}

// updating an employee record
function updateEmployee(employee) {
  for (var i = 0; i < employees.length; i++) {
    if (employee.id == employees[i].id) {
      employees[i] = employee;
    }
  }
}

// deleting an existing employee record
function deleteEmployee(id) {
  for (var i = 0; i < employees.length; i++) {
    if (id == employees[i].id) {
      employees.splice(i, 1);
    }
  }
}

// starting server
app.listen(8000, () => {
  console.log('Server started!');
});

// Cross-Origin-Resource Sharing
const cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// api route for all heroes
app.route('/api/employees').get((req, res) => {
  res.send(employees);
});

// api route for a single hero
app.route('/api/employees/:id').get((req, res) => {
  const requestedEmpId = req.params['id'];
  res.send(findEmployee(requestedEmpId));
});

// api route for adding an employee
app.route('/api/employees').post((req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.send(newEmployee);
});

// modifying existing objects
app.route('/api/employees/:id').put((req, res) => {
  updateEmployee(req.body);
  res.sendStatus(204);
});

// deleting existing objects
app.route('/api/employees/:id').delete((req, res) => {
  const emp = req.params.id;
  deleteEmployee(emp);
});

// on shutdown
process.on('SIGINT', function() {
  fs.writeFile('employee-data.json', JSON.stringify(employees), err => {
    if (err) throw err;
    console.log('Database updated');
    process.exit(1);
  });  
});