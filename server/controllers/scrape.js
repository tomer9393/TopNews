const scrapeService = require('../services/scrape');
const scraperService = require('../services/scraper');

const createScrape = async (req, res) => {
    const newScrape = await scrapeService.createScrape(req.body.title, req.body.img, req.body.published , req.body.time);
    res.json(newScrape);
};

const getScrapes = async (req, res) => {
    const scrapes = await scrapeService.getScrapes();
    res.json(scrapes);
};

const getScrapeById = async (req, res) => {
    const scrape = await scrapeService.getScrapeById(req.params.id);
    if (!scrape) {
        return res.status(404).json({ errors: ['Scrape not found'] });
    }

    res.json(scrape);
};

const getLatestScrapes = async (req, res) => {
  const scrapes = await scrapeService.getLatestScrapes(req.params.numOfScrapes);
  if (!scrapes) {
    return res.status(404).json({ errors: ['No Scrapes To Display'] });
  }

  res.json(scrapes);
};

const getNumOfScrapes = async (req,res)=>{
  const count = await scrapeService.getNumOfScrapes();
  res.json(count);
};

const deleteAllScrape = async (req, res) => {
  const scrape = await scrapeService.deleteAllScrape();

  res.send();
};

const updateScrape = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title is required",
      });
    }

    const scrape = await scrapeService.updateScrape(req.params.id, req.body.title, req.body.img, req.body.published, req.body.time);
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
    await scraperService.scraper();  
    res.send();
  };

  module.exports = {
    createScrape,
    getScrapes,
    getScrapeById,
    updateScrape,
    deleteScrape,
    scraper, 
    deleteAllScrape,
    getLatestScrapes,
    getNumOfScrapes
  };