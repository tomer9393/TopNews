const Scrape = require('../models/scrape');

const createScrape = async (title, img, published, time) => {
    try {
    const scrape = new Scrape({
        title : title,
        img : img,
        published : published
    });

    if(time)
    scrape.time = time;


    return await scrape.save();
    } catch (err) {
        console.log('data was not scraped!');
    }
};

const getScrapeById = async (id) => {
    return await Scrape.findById(id);
};

const getScrapes = async () => {
    return await Scrape.find({}).sort({"published":-1});
};

const getNumOfScrapes = async () => {
    return await Scrape.countDocuments();
};

const getLatestScrapes = async (numOfScrapes) => {
    return await Scrape.aggregate([ { $sample: { size: parseInt(numOfScrapes) } } ]);
};

const updateScrape = async (id, title, img, published, time) => {
    const scrape = await getScrapeById(id);
    if (!scrape)
        return null;

    scrape.title = title;
    scrape.img = img;
    scrape.published = published;
    scrape.time = time;
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
    getLatestScrapes,
    getNumOfScrapes,
    deleteAllScrape
}