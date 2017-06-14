var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/auth/google', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu');
    next();
});

app.get('/', function(req, res){
    res.render('first-view');
});

app.get('/auth/google',function(req,res){
    res.render('dynamic',{
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        url: "http://www.google.com"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
