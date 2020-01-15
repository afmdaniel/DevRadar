const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

// MÉTODOS HTTP
// get - quero acessar informacao
// post - quero criar um usuario novo, adicionar informacao
// put - quero editar um usuario
// delete - quero deletar um usuario

// TIPO DE PARAMETROS
// Query params: request.query (filtros, ordenacao, paginacao, ...) - GET
// Route params: request.params (identificar um recurso na alteração ou remoção) - PUT, DELETE 
// Body: request.body (dados para criação ou alteração de um registro)POST, PUT

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;