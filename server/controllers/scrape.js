const scrapeService = require('../services/scrape');
const scraperService = require('../services/scraper');

const createScrape = async (req, res) => {
    const newScrape = await scrapeService.createScrape(req.body.title, req.body.link, req.body.year, req.body.rating, req.body.genre, req.body.duration, req.body.img);
    res.json(newScrape);
};

const getScrapes = async (req, res) => {
    const scrapes = await scrapeService.getScrapes();
    res.json(scrapes);
};

const getScrape = async (req, res) => {
    const scrape = await scrapeService.getScrapeById(req.params.id);
    if (!scrape) {
        return res.status(404).json({ errors: ['Scrape not found'] });
    }

    res.json(scrape);
};

const updateScrape = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title is required",
      });
    }
  
    const scrape = await scrapeService.updateScrape(req.params.id, req.body.title, req.body.link, req.body.year, req.body.rating, req.body.genre, req.body.duration, req.body.img);
    if (!scrape) {
      return res.status(404).json({ errors: ['Scrape not found'] });
    }
  
    res.json(scrape);
  };

  const deleteScrape = async (req, res) => {
    const scrape = await scrapeService.deleteScrape(req.params.id);
    if (!scrape) {
      return res.status(404).json({ errors: ['Scrape not found'] });
    }
  
    res.send();
  };

  const scraper = async (req, res) => {
    scraperService.scraper();  
    res.send();
  };

  module.exports = {
    createScrape,
    getScrapes,
    getScrape,
    updateScrape,
    deleteScrape,
    scraper
  };