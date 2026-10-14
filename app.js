// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// Run with: node app.js
// No external packages are required.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Pre-existing inventory items (array of objects)
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// Regular function: calculates the category with if/else and switch.
function getCategory(price) {
  if (price < 0) {
    return "Invalid";
  } else if (price < 50) {
    return "Budget";
  } else if (price < 200) {
    return "Standard";
  } else {
    return "Premium";
  }
}

// Arrow function: computes the inventory value using a loop.
const calculateTotalValue = (items) => {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
};

// Regular function with a locally scoped variable: applies a discount.
function calculateDiscount(price, discountRate = 0.10) {
  const discountAmount = price * discountRate;
  return price - discountAmount;
}

// Arrow function: calculates a simple tax estimate.
const calculateTax = (amount, taxRate = 0.05) => amount * taxRate;

// Uses switch to assign a label based on category.
function getCategoryBadge(category) {
  switch (category) {
    case "Budget":
      return "[BUDGET]";
    case "Standard":
      return "[STANDARD]";
    case "Premium":
      return "[PREMIUM]";
    default:
      return "[INVALID]";
  }
}

async function addProduct() {
  console.log("\n--- Add a New Product ---");
  const rawName = await ask("Enter product name: ");
  const name = rawName.trim();

  if (!name) {
    console.log("Product name cannot be empty. Product was not added.");
    return;
  }

  const rawPrice = await ask("Enter product price (e.g., 150): ");
  const price = Number(rawPrice);

  // Validate input explicitly.
  if (rawPrice.trim() === "" || !Number.isFinite(price) || price < 0) {
    console.log("Invalid price. Enter a number that is zero or greater.");
    return;
  } else if (inventory.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
    console.log("A product with that name already exists. Product was not added.");
    return;
  }

  inventory.push({ name, price });
  console.log(`Added product: ${name} ($${price.toFixed(2)})`);
}

function printInventory() {
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((item) => {
    item.category = getCategory(item.price);
    const badge = getCategoryBadge(item.category);
    console.log(`• Item: ${item.name} ($${item.price}) -> Category: ${item.category} ${badge}`);
  });
}

function searchInventory() {
  console.log("\n--- Search Inventory (loop + break/continue) ---");
  const searchTerm = inventorySearchTerm.trim().toLowerCase();

  if (!searchTerm) {
    console.log("No search term entered; skipping search.");
    return;
  }

  let found = false;
  for (const item of inventory) {
    if (!item.name.toLowerCase().includes(searchTerm)) {
      continue; // Skip items that do not match.
    }

    console.log(`Found: ${item.name} — $${item.price.toFixed(2)} (${getCategory(item.price)})`);
    found = true;
    break; // Stop after the first matching item.
  }

  if (!found) {
    console.log(`No product matching "${inventorySearchTerm}" was found.`);
  }
}

let inventorySearchTerm = "";

function showAnalytics() {
  console.log("\n--- Financial Analytics ---");

  const totalValue = calculateTotalValue(inventory);
  const averagePrice = inventory.length > 0 ? totalValue / inventory.length : 0;
  const totalAfterDiscount = inventory.reduce(
    (sum, item) => sum + calculateDiscount(item.price, 0.10),
    0
  );
  const estimatedTax = calculateTax(totalValue, 0.05);

  console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`);
  console.log(`Number of Products: ${inventory.length}`);
  console.log(`Average Product Price: $${averagePrice.toFixed(2)}`);
  console.log(`Total After 10% Discount (estimate): $${totalAfterDiscount.toFixed(2)}`);
  console.log(`Estimated Tax at 5% (informational): $${estimatedTax.toFixed(2)}`);
}

function showAffordableProducts() {
  const rawLimit = affordableLimit;
  const limit = Number(rawLimit);

  if (!Number.isFinite(limit) || limit < 0) {
    console.log("Invalid limit. Please enter a number that is zero or greater.");
    return;
  }

  // Array filter() isolates products matching the selected price limit.
  const affordable = inventory.filter((item) => item.price < limit);
  console.log(`\n--- Filtered Products (Price < $${limit}) ---`);
  console.log(affordable.length ? affordable : "No products are below this price.");
}

function showFormattedReport() {
  // map() transforms inventory objects into formatted strings.
  const report = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price.toFixed(2)}`
  );

  console.log("\n--- Formatted Report List (map) ---");
  console.log(report);
}

function showTags() {
  // Demonstrates map() with the required product-tag style.
  const tags = inventory.map(
    (item) => `${item.name.toUpperCase()} costs $${item.price}`
  );
  console.log("\n--- Mapped Product Tags (map) ---");
  console.log(tags);
}

async function main() {
  console.log("=== Interactive Product Inventory & Analytics Dashboard ===");
  console.log("\nStarting inventory:");
  inventory.forEach((item) => console.log(`- ${item.name}: $${item.price}`));

  const addAnother = (await ask("\nWould you like to add a product? (y/n): ")).trim().toLowerCase();
  if (addAnother === "y" || addAnother === "yes") {
    await addProduct();
  } else {
    console.log("Keeping the existing inventory.");
  }

  printInventory();
  showAnalytics();

  const rawLimit = await ask("\nShow products priced below what amount? (default 200): ");
  affordableLimit = rawLimit.trim() === "" ? "200" : rawLimit.trim();
  showAffordableProducts();

  inventorySearchTerm = await ask("\nEnter a product name to search for (or press Enter to skip): ");
  searchInventory();

  showFormattedReport();
  showTags();

  console.log("\n--- Dashboard Complete ---");
  console.log("Tip: Run the program again to start with the original sample inventory.");
  rl.close();
}

// Declared separately so the value can be assigned after the user is prompted.
let affordableLimit = "200";

main().catch((error) => {
  console.error("Something went wrong:", error);
  rl.close();
});
