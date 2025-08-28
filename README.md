# test-scraper
Small test project. Scrapes data from HackerNews. Store/view/filter the data.

### Running Project
- git clone repo
- npm install
- node index.js

### Routes
http://localhost:3000/v1/json to scrape HackerNews and return JSON data

### Tech Used
- express to serve the JSON data
- cheerios for scraping the data
- sqlite for storing data and filtering results
- jest and supertest for testing

### TODO
- Add route for ejs views
- Handle home route
- More test coverage
