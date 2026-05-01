# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\demoblaze.spec.js >> login
- Location: tests\demoblaze.spec.js:6:1

# Error details

```
Error: Product "Samsung galaxy s6" not found in cart.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e17]:
          - link "Log in" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=e19]:
          - link "Sign up" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup
    - generic [ref=e33]:
      - heading "Total" [level=2] [ref=e34]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [ref=e35]
```

# Test source

```ts
  1  | class CartPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.productRows = "#tbodyid tr";
  5  |         this.placeOrderButton = ".btn-success";
  6  |     }
  7  | 
  8  |     async getAvailableProducts() {
  9  |         const products = [];
  10 |         const rows = this.page.locator(this.productRows);
  11 |         const count = await rows.count();
  12 |         for (let i = 0; i < count; i++) {
  13 |             const productName = await rows.nth(i).locator("td").nth(1).textContent();
  14 |             products.push(productName.trim());
  15 |         }
  16 |         return products;
  17 |     }
  18 | 
  19 |     async isProductPresent(productName) {
  20 |         const products = await this.getAvailableProducts();
  21 |         return products.some(product => product.toLowerCase() === productName.toLowerCase());
  22 |     }
  23 | 
  24 |     async placeOrderIfProductPresent(productName) {
  25 |         const isPresent = await this.isProductPresent(productName);
  26 |         if (isPresent) {
  27 |             await this.page.locator(this.placeOrderButton).click();
  28 |             console.log(`Product "${productName}" found. Clicking Place Order.`);
  29 |         } else {
> 30 |             throw new Error(`Product "${productName}" not found in cart.`);
     |                   ^ Error: Product "Samsung galaxy s6" not found in cart.
  31 |         }
  32 |     }
  33 | }
  34 | 
  35 | module.exports = { CartPage };
  36 | 
```