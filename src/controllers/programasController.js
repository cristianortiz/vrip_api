const mysqlConnection = require("../database");

exports.getAllProgramas = (req, res) => {
  mysqlConnection.query(
    "SELECT id,cod_programa,nombre_programa, orientacion_programa,duracion_semestres,cantidad_sct,unidad_id,id_coordinador FROM programa_postgrado",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
};

exports.getProgramaById = (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT id,cod_programa,nombre_programa, orientacion_programa,duracion_semestres,cantidad_sct,unidad_id,id_coordinador FROM programa_postgrado WHERE programa_postgrado.id=?",
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
