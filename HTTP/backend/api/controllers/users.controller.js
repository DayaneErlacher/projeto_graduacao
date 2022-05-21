const userService = require('../services/users.service')
module.exports = () => {
   const usersDB =
      [
         { "id": 11, "name": "Dr Nice" },
         { "id": 12, "name": "Narco" },
         { "id": 13, "name": "Bombasto" },
         { "id": 14, "name": "Celeritas" },
         { "id": 15, "name": "Magneta" },
         { "id": 16, "name": "RubberMan" },
         { "id": 17, "name": "Dynama" },
         { "id": 18, "name": "Dr IQ" },
         { "id": 19, "name": "Magma" },
         { "id": 20, "name": "Tornado" }
      ]


   const controller = {};

   controller.getAll = async function (req, res) {
      userService.getAll()
      .then(data => {console.log("chega"); res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.getById = async function (req, res) {
      userService.getById(req.params._id)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.add = async function (req, res) {
      userService.add(req.body.user)
      .then(data => res.status(200).json(data))
      .catch(err => {res.status(400).json(err)});
   };

   controller.delete = async function (req, res) {
      userService.delete(req.params._id)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.update = async function (req, res) {
      userService.update(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => {res.status(400).json(err)});
   };
   return controller;
}