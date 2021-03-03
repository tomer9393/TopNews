const Scrape = require('../models/scrape');

const createScrape = async (title, link, year, rating, genre, duration, img) => {
    const scrape = new Scrape({
        title : title,
        link : link,
        year : year,
        rating : rating,
        genre : genre,
        duration : duration,
        img : img
    });


    return await scrape.save();
};

const getScrapeById = async (id) => {
    return await Scrape.findById(id);
};

const getScrapes = async () => {
    return await Scrape.find({});
};

const updateScrape = async (id, title, link, year, rating, genre, duration, img) => {
    const scrape = await getScrapeById(id);
    if (!scrape)
        return null;

    scrape.title = title;
    scrape.year = year;
    scrape.link = link;
    scrape.rating = rating;
    scrape.genre = genre;
    scrape.duration = duration;
    scrape.img = img;
    await scrape.save();
    return scrape;
};

const deleteScrape = async (id) => {
    const scrape = await getScrapeById(id);
    if (!scrape)
        return null;

    await scrape.remove();
    return scrape;
};

const deleteAllScrape = async () => {
    try {
        await Scrape.deleteMany();
        console.log('All Data successfully deleted');
      } catch (err) {
        console.log(err);
      }
};

module.exports = {
    createScrape,
    getScrapeById,
    getScrapes,
    updateScrape,
    deleteScrape,
    deleteAllScrape
}