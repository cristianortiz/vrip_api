const express = require("express");
const {
  getAllInvestigadores,
  getInvestigadorById,
} = require("../controllers/investigadoresController");
const router = express.Router();

//get all the records in 'investigadores' table
router.get("/", getAllInvestigadores);

//get 'investigadores' by id
router.get("/:id", getInvestigadorById);

module.exports = router;
