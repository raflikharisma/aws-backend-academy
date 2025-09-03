const { addNoteHandler, geAllNotesHandler, getNoteByIdHandler, updateNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  {
    method: `POST`,
    path: "/notes",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },

  {
    method: "GET",
    path: "/notes",
    handler: geAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
