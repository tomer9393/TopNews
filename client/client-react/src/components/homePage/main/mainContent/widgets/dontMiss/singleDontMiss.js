var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });

function SingleDontMiss() {
    return (
        <>

    <div className="single-dont-miss-post d-flex mb-30">
        <div className="dont-miss-post-thumb">
             <img src="img/blog-img/dm-1.jpg" alt />             
        </div>
        <div className="dont-miss-post-content">
             <a href="#" className="font-pt">EU council reunites</a>
            <span>Nov 29, 2017</span>
        </div>
    </div>
        </>
    );
}

export default SingleDontMiss;