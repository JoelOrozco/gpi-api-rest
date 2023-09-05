"use strict";

var error = require('./error');
var ValidateTypeService = require('./validateType');

class CrudService {

    constructor(connection, tableName) {
        this.create = new Create(connection, tableName);
        this.read = new Read(connection, tableName);
        this.update = new Update(connection, tableName);
        this.delete = new Delete(connection, tableName);
        this.query = new Query(connection);
    }
}

class Create {
    constructor(connection, tableName) {
        this.validateType = new ValidateTypeService();
        this.pool = connection;
        this.table = tableName;
        this.paramKeys = null;
        this.paramBind = [];
        this.data = [];
    }

    params(params) {
        if (this.validateType.validate(params, 'object')) {
            var keys = Object.keys(params),
                keysParams = [],
                bindParams = [];

            keys.forEach(key => {
                keysParams.push(key);
                bindParams.push('?');
                this.data.push(params[key]);
            });

            this.paramKeys = keysParams.join(',');
            this.paramBind.push('(' + bindParams.join(',') + ')');
        }
    }

    exec(fn) {
        var query = `INSERT INTO ` + this.table + ` ( ` +
            (this.paramKeys == null ? `` : this.paramKeys) + ` ) VALUES ` +
            (this.paramBind == [] ? `` : this.paramBind.join(', '));

        this.pool.query(query, this.data, (err, rows, fields) => {
            if (err) {
                console.log(err.sqlMessage);
                console.log(err.sql);
                fn(error.error3);
            } else {
                fn({ status: 1, msg: 'Exito', data: rows });
            }
        });
    }
}

class Read {
    constructor(connection, tableName) {
        this.pool = connection;
        this.table = tableName;
        this.validateType = new ValidateTypeService();
        this.paramKeys = null;
        this.whereKeys = null;
        this.orderKeys = null;
        this.orderDirect = ' ASC ';
        this.limitNum = null;
        this.groupKeys = null;
        this.data = [];
    }

    params(params) {
        if (this.validateType.validate(params, 'object')) {
            this.paramKeys = params.join(', ');
        }
    }

    where(where) {
        if (this.validateType.validate(where, 'object')) {
            var keys = Object.keys(where),
                keysWhere = [];

            keys.forEach(key => {
                keysWhere.push(key + ` = ? `);
                this.data.push(where[key]);
            });

            this.whereKeys = keysWhere.join(' AND ');
        }
    }

    orderAsc(order) {
        if (this.validateType.validate(order, 'object')) {
            this.orderKeys = order.join(', ');
            this.orderDirect = ` ASC `;
        }
    }

    orderDsc(order) {
        if (this.validateType.validate(order, 'object')) {
            this.orderKeys = order.join(', ');
            this.orderDirect = ` DESC `;
        }
    }

    group(group) {
        if (this.validateType.validate(group, 'object')) {
            this.groupKeys = group.join(', ');
        }
    }

    limit(limit) {
        if (this.validateType.validate(limit, 'number')) {
            this.limitNum = limit;
        }
    }

    exec(fn) {
        var query = `SELECT ` + (this.paramKeys == null ? ` * ` : this.paramKeys) + ` FROM ` + this.table +
            (this.whereKeys == null ? `` : ` WHERE ` + this.whereKeys) +
            (this.orderKeys == null ? `` : ` ORDER BY ` + this.orderKeys + this.orderDirect) +
            (this.groupKeys == null ? `` : ` GROUP BY  ` + this.groupKeys + ` `) +
            (this.limitNum == null ? `` : ` LIMIT ` + this.limitNum + ` `);

        this.pool.query(query, this.data, (err, rows, fields) => {
            if (err) {
                console.log(err.sqlMessage);
                console.log(err.sql);
                fn(error.error3);
            } else {
                fn({ status: 1, msg: 'Exito', data: rows });
            }
        });
    }
}

class Update {
    constructor(connection, tableName) {
        this.validateType = new ValidateTypeService();
        this.pool = connection;
        this.table = tableName;
        this.paramKeys = null;
        this.whereKeys = null;
        this.data = [];
        this.paramsData = [];
        this.whereData = [];
    }

    params(params) {
        if (this.validateType.validate(params, 'object')) {
            var keys = Object.keys(params),
                keysParams = [];

            keys.forEach(key => {
                keysParams.push(key + ` = ? `);
                this.paramsData.push(params[key]);
            });

            this.paramKeys = keysParams.join(', ');
        }
    }

    where(where) {
        if (this.validateType.validate(where, 'object')) {
            var keys = Object.keys(where),
                keysWhere = [];

            keys.forEach(key => {
                keysWhere.push(key + ` = ? `);
                this.whereData.push(where[key]);
            });

            this.whereKeys = keysWhere.join(' AND ');
        }
    }

    exec(fn) {
        this.paramsData.forEach((param) => {
            this.data.push(param);
        });
        this.whereData.forEach((param) => {
            this.data.push(param);
        });

        var query = `UPDATE ` + this.table + ` SET ` +
            (this.paramKeys == null ? `` : this.paramKeys) +
            (this.whereKeys == null ? `` : ` WHERE ` + this.whereKeys);

        this.pool.query(query, this.data, (err, rows, fields) => {
            if (err) {
                console.log(err.sqlMessage);
                console.log(err.sql);
                fn(error.error3);
            } else {
                fn({ status: 1, msg: 'Exito', data: rows });
            }
        });
    }
}

class Delete {
    constructor(connection, tableName) {
        this.validateType = new ValidateTypeService();
        this.pool = connection;
        this.table = tableName;
        this.whereKeys = null;
        this.data = [];
    }

    where(where) {
        if (this.validateType.validate(where, 'object')) {
            var keys = Object.keys(where),
                keysWhere = [];

            keys.forEach(key => {
                keysWhere.push(key + ` = ? `);
                this.data.push(where[key]);
            });

            this.whereKeys = keysWhere.join(' AND ');
        }
    }

    exec(fn) {
        var query = `DELETE FROM ` + this.table +
            (this.whereKeys == null ? `` : ` WHERE ` + this.whereKeys);

        this.pool.query(query, this.data, (err, rows, fields) => {
            if (err) {
                console.log(err.sqlMessage);
                console.log(err.sql);
                fn(error.error3);
            } else {
                fn({ status: 1, msg: 'Exito', data: rows });
            }
        });
    }
}

class Query {
    constructor(connection) {
        this.validateType = new ValidateTypeService();
        this.pool = connection;
        this.queryContent = ``;
        this.dataContent = [];
    }

    query(query) {
        if (this.validateType.validate(query, 'string')) {
            this.queryContent = query;
        }
    }

    data(data) {
        if (this.validateType.validate(data, 'object')) {
            this.dataContent = data;
        }
    }

    exec(fn) {
        this.pool.query(this.queryContent, this.dataContent, (err, rows, fields) => {
            if (err) {
                console.log(err.sqlMessage);
                console.log(err.sql);
                fn(error.error3);
            } else {
                fn({ status: 1, msg: 'Exito', data: rows });
            }
        });
    }
}

module.exports = CrudService;