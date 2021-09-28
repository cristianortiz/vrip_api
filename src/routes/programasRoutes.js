const express = require("express");
const {
  getAllProgramas,
  getProgramaById,
} = require("../controllers/programasController");
const router = express.Router();

//get all the records in 'programas' table
router.get("/", getAllProgramas);

//get 'programas' by id
router.get("/:id", getProgramaById);

module.exports = router;