/**
 * Created by JamesDaniel on 12/01/2017.
 */
module.exports = (function () {
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'data.sqlite'
    });

    var models = function () {
        var Heating = sequelize.define('heating', {
            status: Sequelize.STRING
        });
        return {
            Heating: Heating
        };
    };
    var migrate = function () {
        models.Heating = sequelize.define('heating', {
            status: Sequelize.STRING
        });
    };

    return {
        migrate: migrate,
        models: models
    }
}());