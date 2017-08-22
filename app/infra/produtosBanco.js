module.exports = function() {
    this.lista = function(connection, cb) {
        connection.query('select * from livros', cb);
    }

    return this;
}