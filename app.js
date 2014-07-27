var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();


// create a faux database using an array
var articles = [{title: 'Facebook\'s New Feature Is A Godsend For Busybodies Everywhere',
  summary: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too',
  content: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too. So good in fact, that Facebook has decided to copy it. The social network rolled out a new feature Monday that allows users to save items that interest them for perusal at their own convenience. That means if you\'re swamped at work and your best friend\'s cousin posts a link to photos of Kimye at the beach, you can save the link and gawk at home, instead of being the celeb-obsessed office weirdo. "Every day, people find all sorts of interesting items on Facebook that they don\'t have time to explore right away," explained a blog post from Facebook. "Now you can save items that you find on Facebook to check out later when you have more time." Both Android and iOS users can update their Facebook apps today and use the save button to start building their own portfolios of links, places, movies, TV shows, and music. You\'ll never miss another Tom Hardy with dogs Tumblr again.' },
  {title: 'An iPhone 6 Knockoff Is Going on Sale for $160',
  summary: 'Goophone, the Chinese phone company known for its uncanny smartphone knockoffs, is back with its latest adaptation. The i6, an imitation of the still-unannounced iPhone 6, rolls out online on Aug. 1. Designed based on supposedly leaked images and videos, the i6 is priced at $159.99 for the 16 GB model. For comparison, the 16 GB iPhone 5S retailed for $199 with contract and $649 unlocked.',
  content: 'Goophone, the Chinese phone company known for its uncanny smartphone knockoffs, is back with its latest adaptation. The i6, an imitation of the still-unannounced iPhone 6, rolls out online on Aug. 1. Designed based on supposedly leaked images and videos, the i6 is priced at $159.99 for the 16 GB model. For comparison, the 16 GB iPhone 5S retailed for $199 with contract and $649 unlocked. While it sounds like a sweet deal, consumers should know that i6 uses a different processor than the iPhone and comes equipped with Android instead of iOS. It also only has a 1.4GHz processor, a downgrade from the 2GHz offered with Goophone\'s i5S model, which is — you guessed it — a knockoff of the iPhone 5S. The design of the i6 and the expected design for the rumored iPhone 6 are very close: Both have fingerprint readers on the front, an auto-focusing camera in the rear and other design hallmarks borrowed from iPhones. However, the i6 sports a image of a bumblebee on its back instead of Apple\'s classic logo, distinguishing itself from the iPhone\'s no-frills design. Goophone hasn\'t explained why it uses the bee as its logo, only remarking that it is "cute." Unlike the Goophone i5S, the i6 is only offered in two colors, black and white. The champagne finish was a new direction for iPhone design when the 5S emerged and was copied by Goophone (and others). It\'s still unknown what colors Apple will offer for the iPhone 6. It\'s also difficult to say exactly how closely the i6 resembles its Apple original, as designs for the iPhone 6 leaked earlier this year proved to be fake. An exact release date for the iPhone 6 has also been hazy, after rumors that a smaller version would debut in August were squashed. It is now widely anticipated that both the 4.7-inch will hit the market in September, while a larger 5.5-inch model could come in the months ahead. In the past, Goophone has mimicked the Samsung Galaxy S5 and other highly desirable smartphones. While there are obvious copyright issues at hand, Chinese authorities aren\'t doing much to shut it down for now.' }];

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// set app to use ejs as view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('site/index', {articles: articles});
});

app.get('/about', function(req, res) {
  res.render('site/about');
});

app.get('/contact', function(req, res) {
  res.render('site/contact');
});

app.get('/articles', function(req, res) {
  res.render('articles/articles', {articles: articles});
  console.log(articles);
});

app.get('/articles/new', function(req, res) {
  res.render('articles/new');
});

app.post('/articles', function(req, res) {
  console.log(req.body.article);
  articles.push(req.body.article);
  res.redirect('/articles');
});

app.get('/articles/:id', function(req, res) {
  var index = req.params.id;
  var article = articles[index];
  res.render('articles/show', {article: article});
});

app.listen(3000, function() {
  console.log('server started on localhost:3000');
});




