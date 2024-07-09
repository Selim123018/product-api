# Amazon-Scraper-API

## Project Description

Amazon-Scraper-API is a web API built with Node.js and Express.js that allows users to get search result data from Amazon. When a specific endpoint is met, it triggers a web scraper agent to scrape data for a particular item on Amazon.

## Tech Stack

- Node.js
- Express.js
- Puppeteer

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository: `git clone https://github.com/rabiuk/Amazon-Scraper-API.git`
2. Go into the repository: `cd Amazon-Scraper-API`
3. Install dependencies: `npm install`

### Running

To start the server, run: `npm start`

## API Endpoints

- GET `/api/search/:item`: Triggers the web scraper agent to search Amazon for the given item and then return the search results.

## Notes

Web scraping is against the terms of service of some websites. This project is for educational purposes only and is not intended for use in any production system. Always respect the terms of service of the website you are scraping.

## Author

Kehinde Rabiu
