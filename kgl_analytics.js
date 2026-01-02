/**
 * kgl_analytics.js
 */
let procurementRecords = [
    { id: 1, dealerName: "Alpha", 
        produceType: "Beans", 
        tonnageInKgs: 1200, 
        costInUgx: 600000, 
        procurementDate: new Date() },
    // ... add 5 more records
];

// 2. .map() to add costPerKg
const expandedRecords = procurementRecords.map(record => ({
    ...record,
    costPerKg: record.costInUgx / record.tonnageInKgs
})); //

// 3. .filter() for tonnage >= 1000
const largeProcurements = expandedRecords.filter(r => r.tonnageInKgs >= 1000);
console.log("Filtered Records:", largeProcurements, "Count:", largeProcurements.length); //

// 4. .reduce() for totals
const totals = expandedRecords.reduce((acc, curr) => {
    acc.totalTonnage += curr.tonnageInKgs;
    acc.totalCost += curr.costInUgx;
    return acc;
}, { totalTonnage: 0, totalCost: 0 }); //

console.log(`Total Tonnage Procured: ${totals.totalTonnage}kg`);
console.log(`Total Cost: ${totals.totalCost} UGX`); //


function getUniqueDealers(records) {
    const dealerSet = new Set(records.map(r => r.dealerName)); // Extract names into a Set
    return Array.from(dealerSet); // Convert Set back to Array
}

console.log("Unique Dealers:", getUniqueDealers(procurementRecords));

// Role Authorization with Sets
const authorizedRoles = new Set(['Manager', 'Director']);

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole); // Check if role exists in Set
}

console.log("Is Manager Authorized?", isAuthorizedForProcurement('Manager')); // true
console.log("Is Sales Agent Authorized?", isAuthorizedForProcurement('Sales Agent')); // false

/**
 * Part C: Maps for Price Management
 */

// 7. Create a Map called kglPriceList with specific produce prices
const kglPriceList = new Map([
    ['Beans', 5500],
    ['Grain Maize', 4800],
    ['Cow peas', 6000],
    ['G-nuts', 7200],
    ['Soybeans', 5800]
]);

// 8. Function to calculate the total sale amount
function calculateSaleTotal(produceName, tonnageInKgs) {
    // Use .get() to retrieve the price per kg
    const price = kglPriceList.get(produceName);

    // Check if the produce exists in the Map
    if (price === undefined) {
        return "Price not found";
    }

    // Return the total sale amount (price * tonnage)
    return price * tonnageInKgs;
}

// Testing the function
console.log(`Total for Beans: ${calculateSaleTotal('Beans', 100)} UgX`);
console.log(`Total for Unknown: ${calculateSaleTotal('Rice', 100)}`);

// 9. Iterate over the Map and find the highest price
console.log("--- Current Price List ---");
kglPriceList.forEach((price, name) => {
    console.log(`Produce: ${name}, Price per Kg: ${price} UgX`);
});

// Calculate the highest price using .reduce() on Map values
const prices = Array.from(kglPriceList.values());
const highestPrice = prices.reduce((max, current) => {
    return current > max ? current : max;
}, 0);

console.log(`Highest price in the Map: ${highestPrice} UgX`);