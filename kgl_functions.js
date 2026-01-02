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

// Quick Test Logs
console.log("Cost:", calculateProcurementCost(100, 500)); // 50000
console.log("Is Valid Name:", validateBuyerName("James")); // true
console.log("Auth level:", checkUserAuthorization('Manager'));