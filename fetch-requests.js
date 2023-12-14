/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch ('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})



/* ============================== Phase 2 ============================== */

fetch ('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(res => console.log("STATUS: ", res.status, "CONTENT TYPE: ", res.headers.get("Content-Type"), "URL: ", res.url))
.catch(error => console.log(error))



/* ============================== Phase 3 ============================== */

fetch ('/products', {
    method: 'POST',
    body: new URLSearchParams({
        name: "Caribbean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
      }),
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

// Request components:
// - Method: POST
// - URL: /products/new
// - Headers: none
// - Body: { name: value, description: value, price: value, categories: value }

// Response components:
// - Status code: 301
// - Headers: content-type: html
// - Body: html page for product details
