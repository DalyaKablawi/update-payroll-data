// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {
  /*
  The exitLoop variable is defined so that when used as a parameter in the while 
  loop, it dictates how long the while loop should be in effect. In this case, 
  if the exitLoop variable is true, the while loop continues.
  During the loop, the user is prompted for their first and last name as well as their salary.
  If the salary entered is not a number, it defaults to 0 per the README instructions.
  */
  let exitLoop = true;
  const totalEmployees = [];
  while (exitLoop) {
    const firstName = prompt("Enter first name");
    const lastName = prompt("Enter last name");
    let salary = prompt("Enter salary");
    if (isNaN(salary)) {
      salary = 0;
    }
    const userData = {
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary),
    };

    /*
The below code adds the userData object values to the empty totalEmployees array 
so as to propagate it for as long as the user inputs data.
*/
    totalEmployees.push(userData);
    /*
    This code asks the user if they would like to add another employee. If they click 'cancel' 
    exitLoop returns false and the while loop ends
    */
    exitLoop = confirm("Do you want to add another employee?");
  }
  //This logs the array of objects to the console for all users who have inputted data
  console.log(totalEmployees);
  //This returns the output in the table as described in the source code
  return totalEmployees;
};

/*To calculate sum of salaries, I initiated sum by setting it to zero. Then a for loop traverses 
employeesArray array and incremently adds the value of the next salary.*/
const displayAverageSalary = function (employeesArray) {
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum = sum + employeesArray[i].salary;
  }
  /*This logs the average salary by including the formula to calculate average as 
  sum/number of employees in the array and sets the answer to 2 decimals to mimic currency*/
  console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is $${(sum / employeesArray.length).toFixed(2)}`
  );
};

const getRandomEmployee = function (employeesArray) {
  /*This code defines the total number of employees and sets a random employee via the Math random
function. Then it logs the random employee to the console as the winner of the draw.*/
  let totalNumber = employeesArray.length;
  let randomNumber = Math.floor(Math.random() * totalNumber);
  console.log(
    `Congratulations to ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
