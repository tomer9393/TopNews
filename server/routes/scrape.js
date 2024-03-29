const express = require('express');
var router = express.Router();
const scrapeController = require('../controllers/scrape');

router.route('/')
    .get(scrapeController.getScrapes)
    .post(scrapeController.createScrape)
    .delete(scrapeController.deleteAllScrape);

router.route('/latestScrapes/:numOfScrapes')
    .get(scrapeController.getLatestScrapes);

router.route('/scrape')
    .get(scrapeController.scraper);

router.route('/:id')
    .get(scrapeController.getScrapeById)
    .patch(scrapeController.updateScrape)
    .delete(scrapeController.deleteScrape);

module.exports = router;