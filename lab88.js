var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ryerson:123456s@cluster0.kbbtv.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { Title:'Twilight',Author:'Stephenie Meyer', Publisher:'Little, Brown and Company',Date:'5 Oct, 2005', Website:'https://stepheniemeyer.com'}, 
        {Title:'New Moon',Author:'Stephenie Meyer',Publisher:'Little, Brown and Company',Date:'21 Aug, 2006', Website:'https://stepheniemeyer.com'},
        {Title:'Eclipse',Author:'Stephenie Meyer',Publisher:'Little, Brown and Company',Date:'7 Aug, 2007', Website:'https://stepheniemeyer.com'},
        {Title:'Breaking Dawn',Author:'Stephenie Meyer',Publisher:'Little, Brown and Company','Date':'2 Aug, 2008', Website:'https://stepheniemeyer.com'},
        {Title:'Hunger Games',Author:'Suzanne Collins',Publisher:'Scholastic Press',Date:'14 Sept, 2008', Website:'https://www.suzannecollinsbooks.com'},
        {Title:'Hunger Games: Catching Fire',Author:'Suzanne Collins',Publisher:'Scholastic Press',Date:'14 Sept, 2008', Website:'https://www.suzannecollinsbooks.com'},
        {Title:'Hunger Games: MockingJay',Author:'Suzanne Collins',Publisher:'Scholastic Press',Date:'24 Aug, 2010', Website:'https://www.suzannecollinsbooks.com'},
]

    dbo.collection("Books_Inventory").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
      
      });
    });

    
    
    
 