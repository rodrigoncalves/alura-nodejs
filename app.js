var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos.js')(app);

app.listen(3000, function() {
	console.log("server running...");
});
