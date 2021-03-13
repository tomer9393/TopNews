let axios = require('axios');
let cheerio = require('cheerio');
const scrapeService = require('./scrape');

const scraper = async () => {
    const page = await axios.get('https://www.jpost.com/international')    
    const $ = cheerio.load(page.data);
    $('div.a-list').each(function () {
        $('div.itc', this).each(function () {
        const art = $(this);
        const time = Date.now();
        var publishedString = $(art).children('div.itc-info').children('div.bottom-info').children('span').text();
        var published = DateFormat(publishedString);
        var img= $(art).children('a').children('img.lazy').attr('data-original'); 
        var title = $(art).children('a').attr('title');
        scrapeService.createScrape(title, img, published, time);
        });
    });
};

const DateFormat = (str) => {
    var parts = str.split("/");
    var dt = new Date(parseInt(parts[2], 10),
                      parseInt(parts[1], 10) - 1,
                      parseInt(parts[0], 10));
    return dt;
};



module.exports = {
    scraper
};