module.exports = function(app) {

	var listaProdutos = function(req, res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results) {
			if (err) console.log(err);
			res.render('produtos/lista', {lista: results});
		});

		connection.end();
	};

	app.get('/produtos', listaProdutos);

	app.get('produtos/remove', function() {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		var produto = produtosDAO.carrega(id, callback);
		if (produto) {
			produtosDAO.remove(produto, callback);
		}
	});

	app.get('/produtos/form', function(req, res) {
		res.render('produtos/form');
	});

	app.post('/produtos/salva', function(req, res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

			var produto = req.body;

		produtosDAO.salva(produto, function(err, results) {
			if (err) console.log(err);
			res.redirect("/produtos");
		});

		connection.end();
	});
}
