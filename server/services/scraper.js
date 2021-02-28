let axios = require('axios');
let cheerio = require('cheerio');
const scrapeService = require('./scrape');

const scraper = async () => {
    debugger
    const page = await axios.get('https://www.imdb.com/list/ls000041191/')    
    const $ = cheerio.load(page.data);
    $('.lister-item.mode-detail').each(function () {
        const div = $(this);
        var img = $(div).children('div.lister-item-image.ribbonize').children('a').children('img').attr('src');
        const imdb = "https://www.imdb.com/";
        var title = $(div).children('div.lister-item-content').children('h3.lister-item-header').children('a').text();
        var linkExt = $(div).children('div.lister-item-content').children('h3.lister-item-header').children('a').attr('href');
        var link = imdb+linkExt;
        var year = $(div).children('div.lister-item-content').children('h3.lister-item-header').children('span.lister-item-year.text-muted.unbold').text();
        var rating = $(div).children('div.lister-item-content').children('div.ipl-rating-widget').children('div.ipl-rating-star.small').children('span.ipl-rating-star__rating').text();
        var genre = $(div).children('div.lister-item-content').children('p.text-muted.text-small').children('span.genre').text().trim();
        var duration = $(div).children('div.lister-item-content').children('p.text-muted.text-small').children('span.runtime').text();
        scrapeService.createScrape(title, link, year, rating, genre, duration, img);
        });
};

module.exports = {
    scraper
};