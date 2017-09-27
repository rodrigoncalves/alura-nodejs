module.exports = function() {
    return function(connection) {
        this.lista = function(cb) {
            connection.query('select * from livros', cb);
        }

        // this.remove = function(cb) {
        //     connection.query('select * from produtos', cb);
        // }

        return this;
    }
}
