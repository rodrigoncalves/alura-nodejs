module.exports = function(app) {

	app.get('/produtos', function(req, res, next) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err, results) {
			if (err) {
				console.log(err);
				return next(err);
			}

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
	});

	app.get('produtos/remove', function() {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		var produto = produtosDAO.carrega(id, callback);
		if (produto) {
			produtosDAO.remove(produto, callback);
		}
	});

	app.get('/produtos/form', function(req, res) {
		res.render('produtos/form', {errosValidacao: {}, produto: {}});
	});

	app.post('/produtos', function(req, res) {
		var produto = req.body;

		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();

		var erros = req.validationErrors();
		if (erros) {
			res.format({
				html: function() {
					res.status(400).render('produtos/form', {errosValidacao: erros, produto: produto});
				},
				json: function() {
					res.status(400).json(erros);
				}
			});

			return;
		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(err, results) {
			if (err) console.log(err);
			res.redirect("/produtos");
		});

		connection.end();
	});
}
