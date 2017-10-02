module.exports = function(app) {

	var listaProdutos = function(req, res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results) {
			if (err) console.log(err);
			res.format({
				html: function() {
					res.render('produtos/lista', {lista: results});
				},
				json: function() {
					res.json(results);
				}
			});
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

	app.post('/produtos', function(req, res) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		var produto = req.body;
		console.log(produto);

		produtosDAO.salva(produto, function(err, results) {
			if (err) console.log(err);
			res.redirect("/produtos");
		});

		connection.end();
	});
}
