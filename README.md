# test-scraper
Small test project. Scrapes data from HackerNews. Store/view/filter the data.

### Running Project
- git clone repo
- npm install
- node index.js

### Testing Project
- npm run test

### Routes
- http://localhost:3000  - Simple homepage (links to other routes)
- http://localhost:3000/v1/json  -   Scrape HackerNews and return JSON data
- http://localhost:3000/v1/view  -   Scrape and return data in simple HTML tables(using ejs)

### Tech Used
- express to serve the JSON data
- ejs templates for simple webpages
- cheerios for scraping the data
- sqlite for storing data and filtering results
- jest and supertest for testing

### TODO
- More test coverage
- Optimize sqlite queries(mulitple inserts now)
- Optimize scraper loop
- Test home and data routes(html)
- More css on home and data pages
