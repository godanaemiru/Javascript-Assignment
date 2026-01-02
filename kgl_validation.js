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