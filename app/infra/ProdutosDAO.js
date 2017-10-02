function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(cb) {
    this._connection.query('select * from produtos', cb);
}

ProdutosDAO.prototype.remove = function(cb) {
    this._connection.query('select * from produtos', cb);
}

ProdutosDAO.prototype.salva = function(produto, cb) {
    this._connection.query('insert into produtos set ?', produto, cb);
}
module.exports = function() {
    return ProdutosDAO;
}
