const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteBayIdAndler,
  editNoteBayIdAndler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteBayIdAndler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteBayIdAndler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
