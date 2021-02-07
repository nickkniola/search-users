const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const userData = [
  { name: "Alex", age: "24", job: "Human Resources" },
  { name: "Alex", age: "56", job: "President" },
  { name: "Cody", age: "33", job: "IT" },
  { name: "Joe", age: "45", job: "Accountant" },
  { name: "Joe", age: "21", job: "Accountant" },
  { name: "Sarah", age: "65", job: "Chief Financial Officer" },
  { name: "Sarah", age: "24", job: "Human Resources" },
  { name: "Sarah", age: "72", job: "IT" }
];

app.post('/search', function (req, res) {
  console.log(req.body);
  const filteredUsers = userData.filter(user => user.name === req.body.search)
  console.log(filteredUsers)
  return res.json(filteredUsers);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => {
  console.log("express server listening on port 8080")
});
