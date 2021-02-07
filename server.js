const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const userData = [
  { name: "Alex Smith", age: "56", job: "Human Resources" },
  { name: "Alex Jones", age: "41", job: "President" },
  { name: "Joe Miller", age: "33", job: "IT" },
  { name: "Joe Stephens", age: "45", job: "Accountant" },
  { name: "Joe Lewin", age: "21", job: "Accountant" },
  { name: "Sarah Louis", age: "65", job: "Chief Financial Officer" },
  { name: "Sarah Baskins", age: "24", job: "Human Resources" },
  { name: "Sarah Sanchez", age: "72", job: "IT" }
];

app.post('/search', function (req, res) {
  const filteredUsers = userData.filter(user => user.name.includes(req.body.search));
  return res.json(filteredUsers);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080, () => {
  console.log("express server listening on port 8080")
});
