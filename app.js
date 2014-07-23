var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();


// create a faux database using an array
var articles = [{title: 'Facebook\'s New Feature Is A Godsend For Busybodies Everywhere',
  summary: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too',
  content: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too. So good in fact, that Facebook has decided to copy it. The social network rolled out a new feature Monday that allows users to save items that interest them for perusal at their own convenience. That means if you\'re swamped at work and your best friend\'s cousin posts a link to photos of Kimye at the beach, you can save the link and gawk at home, instead of being the celeb-obsessed office weirdo. "Every day, people find all sorts of interesting items on Facebook that they don\'t have time to explore right away," explained a blog post from Facebook. "Now you can save items that you find on Facebook to check out later when you have more time." Both Android and iOS users can update their Facebook apps today and use the save button to start building their own portfolios of links, places, movies, TV shows, and music. You\'ll never miss another Tom Hardy with dogs Tumblr again.' },
  {title: 'Facebook\'s New Feature Is A Godsend For Busybodies Everywhere',
  summary: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too',
  content: 'One of the best features of The New York Times\' award-winning app is the save option. It allows users who don\'t have the time to read everything at once save stories for later. What develops is a curated back catalog of articles that can be dipped into at the subscriber\'s convenience. It\'s an impossibly simple idea, and a good one, too. So good in fact, that Facebook has decided to copy it. The social network rolled out a new feature Monday that allows users to save items that interest them for perusal at their own convenience. That means if you\'re swamped at work and your best friend\'s cousin posts a link to photos of Kimye at the beach, you can save the link and gawk at home, instead of being the celeb-obsessed office weirdo. "Every day, people find all sorts of interesting items on Facebook that they don\'t have time to explore right away," explained a blog post from Facebook. "Now you can save items that you find on Facebook to check out later when you have more time." Both Android and iOS users can update their Facebook apps today and use the save button to start building their own portfolios of links, places, movies, TV shows, and music. You\'ll never miss another Tom Hardy with dogs Tumblr again.' }];

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// set app to render .html as ejs
// app.engine('html', ejs.__express);
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




