module.exports = function(app) {

    app.get("/promocoes/form", function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, result) {
            if (err) console.log(err);
            res.render('promocoes/form', {lista: result});
        });

        connection.end();
    });

    app.post("/promocoes", function(req, res) {
        var promocao = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(promocao, function(err, result) {
            if (err) console.log(err);
            res.redirect('promocoes/form');
        });
    });
}
