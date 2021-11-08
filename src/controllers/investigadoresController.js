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

exports.getClaustrosAcademicos = async(req, res) => {
  /* const programas = await  this.getProgramasPostgrado()
  console.log(programas) */
  await mysqlConnection.query(
   `SELECT programa_postgrado.id,nombre,apellido_paterno,apellido_materno,categoria,cuerpo_academico_postgrado.estado 
    FROM investigador, cuerpo_academico_postgrado,programa_postgrado
    WHERE investigador.id=cuerpo_academico_postgrado.id_academico
    AND cuerpo_academico_postgrado.id_programa=programa_postgrado.id 
    AND cuerpo_academico_postgrado.estado='activo'`,
  
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
       //console.log(claustros)
      } else {
        console.log(err);
      }
    }
  );
};

exports.getProgramasPostgrado = async(req, res) => {
 
 await mysqlConnection.query(
    "SELECT id, nombre_programa FROM programa_postgrado",
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
