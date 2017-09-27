function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(cb) {
    this._connection.query('select * from livros', cb);
}

ProdutosDAO.prototype.remove = function(cb) {
    this._connection.query('select * from produtos', cb);
}

module.exports = function() {
    return ProdutosDAO;
}
