function calculateProcurementCost(tonnageInKg, pricePerKg) {
    // Validation: check if they are numbers and not negative
    if (typeof tonnageInKg !== 'number' || typeof pricePerKg !== 'number' || tonnageInKg < 0 || pricePerKg < 0) {
        return "Invalid input";
    }
    return tonnageInKg * pricePerKg;
}

// 2. Arrow function for name validation
const validateBuyerName = (buyerName) => {
    return buyerName.length >= 2 && buyerName !== "";
};

// 3. Switch statement for role authorization
function checkUserAuthorization(role) {
    switch (role) {
        case 'Manager':
            return "procurement_and_sales";
        case 'Sales Agent':
            return "sales_only";
        case 'Director':
            return "view_aggregations";
        default:
            return "unauthorized";
    }
}

// Part B: Object Creation and Manipulation


function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return {
        // Generate a random number between 1000-9999
        id: Math.floor(Math.random() * 9000) + 1000, 
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(), // Current date and time
        isCreditSale: false
    };
}

// Create a record with test data
let mySalesRecord = createSalesRecord("Beans", 1200, "James Bond", 600000);

// Add a new property 'branch' using dot notation
mySalesRecord.branch = "Maganjo";

// Modify 'isCreditSale' to true
mySalesRecord.isCreditSale = true;

// Add a 'dueDate' property using bracket notation
mySalesRecord.dueDate = "2026-02-01";

// Log all property names using Object.keys()
console.log("Property Names:", Object.keys(mySalesRecord));

// Iterate over the object and log property/value pairs
for (let key in mySalesRecord) {
    console.log(`Property: ${key}, Value: ${mySalesRecord[key]}`);
}

// Part C: Loop Implementation and Data Processing 

// 7. Weekly Tonnage Calculation
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = 0;

for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}

let averageTonnage = totalTonnage / weeklyTonnage.length;
console.log(`Total Weekly Tonnage: ${totalTonnage}, Average: ${averageTonnage}`);

// 8. Credit Sales Count using for...of and continue
let salesRecords = [
    createSalesRecord("Beans", 1000, "Buyer A", 20000),
    createSalesRecord("Maize", 500, "Buyer B", 10000),
    createSalesRecord("G-nuts", 300, "Buyer C", 5000),
    createSalesRecord("Peas", 800, "Buyer D", 15000),
    createSalesRecord("Soya", 200, "Buyer E", 4000)
];

// Manually setting some to credit for testing
salesRecords[0].isCreditSale = true;
salesRecords[2].isCreditSale = true;

let creditCount = 0;
for (let sale of salesRecords) {
    if (sale.isCreditSale !== true) {
        continue; // Skip non-credit sales
    }
    creditCount++;
}
console.log(`Total credit sales: ${creditCount}`);

// 9. Stock Check using break
let inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

for (let item of inventory) {
    if (item.tonnage === 0) {
        console.log(`Manager Alert: ${item.name} is out of stock`);
        break; // Exit loop immediately
    }
}