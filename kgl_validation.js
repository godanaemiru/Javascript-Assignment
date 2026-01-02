const companyName = "Karibu Groceries LTD";
// I used const because the company name is a fixed value that should not change.
const minimumTonnage = 1000;
/* 
I used const for minimum tonnage because it is a threshold value 
representing a minimum value which is unlikely to change 
*/
let isOperational = true;
/* We use 'let' for isOperational because the operational status 
   of a business can change (e.g., during maintenance or holidays).
*/
let managerName;
/* We use 'let' for managerName because we are declaring it without an 
   initial value, intending to assign it later. 'const' requires immediate assignment.
*/
let closedBranches = null;
/* We use 'let' for closedBranches. While it is currently null, 
   this value would likely be updated in case of a change in branch status.
*/
console.log("Type of companyName:", typeof companyName);     
console.log("Type of minimumTonnage:", typeof minimumTonnage);
console.log("Type of isOperational:", typeof isOperational);   
console.log("Type of managerName:", typeof managerName);       
console.log("Type of closedBranches:", typeof closedBranches); 


// Part B: String Manipulation and Validation

const dealerNameInput = "  james BOND  ";

let cleanDealerName = dealerNameInput.trim().toLowerCase();


cleanDealerName = cleanDealerName
    .split(' ') // Split into ["james", "bond"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // ["James", "Bond"]
    .join(' '); // "James Bond"

// Log the result using a template literal
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);


if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}

//Part C: Conditional Logic and Business Rules

let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

if (userRole === 'Sales Agent') {
    console.log("Error: Sales Agents are not allowed to record produce entries.");
} else {
    // Rule 2: Tonnage must be >= 1000kg
    let isTonnageValid = procurementTonnage >= 1000;

    // Rule 3: Cost must be >= 10000 (at least 5 digits)
    // Convert string to Number type first
    let costAsNumber = Number(costInUgx);
    let isCostValid = costAsNumber >= 10000;

    // 9. Single Boolean expression using Logical AND (&&)
    if (isTonnageValid && isCostValid) {
        console.log("Procurement record valid");
    } else {
        console.log("Procurement record invalid");
    }
}