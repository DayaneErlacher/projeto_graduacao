const userService = require('../services/users.service')
module.exports = () => {
   const controller = {};

   controller.getUser = async function (req, res) {
      userService.getUser(req.params._id)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.add = async function (req, res) {
      userService.add(req.body)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.getAll = async function (req, res) {
      userService.getAll()
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.delete = async function (req, res) {
      userService.delete(req.params._id)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   controller.update = async function (req, res) {
      userService.update(req.body)
      .then(data => {res.status(200).json(data)})
      .catch(err => {res.status(400).json(err)});
   };

   return controller;
}