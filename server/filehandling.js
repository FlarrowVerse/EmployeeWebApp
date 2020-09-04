
const fs = require('fs');

// data
const employees = require('./employee-data.json');

console.log(employees);

let emp = { id: 11, name: 'Employee11' };

employees.push(emp);

// on shutdown
fs.writeFile('employee-data.json', employees, err => {
    if (err) throw err;
    console.log('Database updated');
});
