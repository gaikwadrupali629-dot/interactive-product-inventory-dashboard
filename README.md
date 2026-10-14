# Interactive Product Inventory & Analytics Dashboard

A console-based JavaScript capstone project that brings together core JavaScript concepts in one program.

## Requirements covered

1. **Data input and initialization**
   - Starts with Laptop ($800), Mouse ($25), and Keyboard ($45).
   - Asks the user whether to add another product, then asks for its name and price.
   - Converts the price input to a number and validates it.

2. **Control flow and conditional evaluation**
   - Uses `if/else` to validate product details and assign categories.
   - Uses `switch` to assign a category badge.
   - Categories: Budget (under $50), Standard ($50 to under $200), Premium ($200 and above).

3. **Loops and flow control**
   - Uses `for...of` and `forEach()` to process inventory.
   - Uses `continue` to skip products that do not match a search.
   - Uses `break` to stop after the first matching product.

4. **Functions and scope**
   - Uses regular functions and arrow functions.
   - Calculates inventory value, discount estimates, and estimated tax.
   - Uses function-local variables.

5. **Array methods and iteration**
   - Uses `forEach()` to print inventory.
   - Uses `filter()` to show products below a selected price.
   - Uses `map()` to create formatted reports and product tags.
   - Uses `reduce()` to calculate the total after discounts.

## What you need

- A computer with Node.js installed
- Visual Studio Code (VS Code)

No external npm packages are required.

## Step 1: Install/check Node.js

1. Install the current LTS version of Node.js from https://nodejs.org/ if it is not installed.
2. Open VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
node --version
npm --version
```

If both commands show version numbers, you are ready. If `node` is not recognized, install Node.js and restart VS Code.

## Step 2: Open the project in VS Code

1. Extract the downloaded ZIP file.
2. In VS Code, select **File → Open Folder**.
3. Select the extracted `Interactive_Product_Inventory_Analytics_Dashboard` folder.
4. In the Explorer panel, check that you can see `app.js`, `package.json`, and `README.md`.

## Step 3: Run the project

In the VS Code terminal, make sure the terminal is in the project folder. Then run either command:

```bash
node app.js
```

or:

```bash
npm start
```

Answer the prompts in the terminal. For example:
- Type `y` when asked whether you want to add a product.
- Enter `Monitor` as the name.
- Enter `150` as the price.
- Enter `200` for the affordable price limit.
- Enter `mouse` to test the search feature.

**Important:** Type your answers into the terminal after each prompt. Do not type them into the JavaScript editor.

## Example calculation

With the original three products:

- Laptop = $800
- Mouse = $25
- Keyboard = $45

Total inventory value = $800 + $25 + $45 = **$870**.

If you add Monitor for $150, the new total is **$1,020**. The total changes based on the products entered.

## Common issues

- **`node` is not recognized:** Install Node.js, close and reopen VS Code, and try `node --version` again.
- **Nothing happens after running:** Make sure you run `node app.js` in the terminal, not in the editor.
- **The program is waiting:** It is waiting for an answer in the terminal.
- **Want to start over:** Press `Ctrl+C` to stop the program, then run `node app.js` again.

## Suggested screenshots for submission

Take screenshots of:
1. The code in `app.js` showing the functions and array methods.
2. The terminal showing the product input.
3. The terminal showing inventory categories and analytics.
4. The terminal showing the filtered products and formatted report.

## Project title

**Interactive Product Inventory & Analytics Dashboard**
