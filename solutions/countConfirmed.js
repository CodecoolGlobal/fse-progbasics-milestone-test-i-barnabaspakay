/*
Fill the function countConfirmed(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "username": "steve.simon",
  "email": "steve.simon12@gmail.com",
  "phone": "+44701231231",
  "isConfirmed": true
}
Count the users where the isConfirmed key's value is true and return the amount as a number.
If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1.
*/

function countConfirmed(users) {
  let numberOfConfirmed = 0;
  for (let user of users) {
    if (user.isConfirmed === true) {
      numberOfConfirmed++;
    }
  }
  return numberOfConfirmed;
}

module.exports = countConfirmed;
