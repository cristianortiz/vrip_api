const mysqlConnection = require("../database");

exports.getAllInvestigadores = (req, res) => {
  mysqlConnection.query(
    "SELECT id,rut,nombre,apellido_paterno FROM investigador LIMIT 100",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
};

exports.getInvestigadorById = (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT id,rut,nombre,apellido_paterno FROM investigador WHERE id=?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
};
