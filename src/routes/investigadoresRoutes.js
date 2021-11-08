const express = require("express");
const {
  getAllInvestigadores,
  getInvestigadorById,
  getClaustrosAcademicos,
} = require("../controllers/investigadoresController");
const router = express.Router();

//get all the records in 'investigadores' table
router.get("/", getAllInvestigadores);
//get all the records in 'claustro_academico_postgrado' table
router.get("/claustros", getClaustrosAcademicos);

//get 'investigadores' by id
router.get("/:id", getInvestigadorById);

module.exports = router;
