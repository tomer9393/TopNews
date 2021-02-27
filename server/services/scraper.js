let axios = require('axios');
let cheerio = require('cheerio');
const scarpedListService = require('../services/scarpedList');

const scrape = async () => {
    const page = await axios.get('https://edition.cnn.com/world')    
    const $ = cheerio.load(page.data);    
    $('tr.vevent').each(function () {
        $('td.summary', this).each(function(){
            const row = $(this);
            title = row.text();

            let d = row.nextAll().eq(2).text();
            d = d.substr(d.indexOf('(')+1,10)
            let published = new Date(d);

            scarpedListService.createArticle(title, category, date,  published, lastUpdate);
        });        
    });
};

module.exports = {
    scrape
};