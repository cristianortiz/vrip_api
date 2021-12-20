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
  //first get the list of active programs
  const programas =  await getProgramasPostgrado()
  //now query the faculty members of every active programas
   mysqlConnection.query(
   `SELECT programa_postgrado.id AS p_id,nombre,apellido_paterno,apellido_materno,categoria,cuerpo_academico_postgrado.estado,img 
    FROM investigador, cuerpo_academico_postgrado,programa_postgrado
    WHERE investigador.id=cuerpo_academico_postgrado.id_academico
    AND cuerpo_academico_postgrado.id_programa=programa_postgrado.id 
    AND cuerpo_academico_postgrado.estado='activo'`,
  
    (err, rows, fields) => {
      if (!err) {
        //add to every programa their own faculty members in active to return one data structure to frontend
        //TODO: make a function to encapsulate this
        for(let i=0; i< programas.length;i++){
          programas[i]["academicos"] = []
           for(let j=0; j< rows.length;j++){
             if(programas[i].id === rows[j].p_id){
               
                programas[i]["academicos"].push(rows[j])
               //programas[i].candidatos[j] =cands[j].perfil
                
             }
         }
       }
        console.log(rows)
        res.json(programas);
      
      } else {
        console.log(err);
      }
    }
  );
};

function getProgramasPostgrado() {
 return new Promise((res,rej)=>{
  mysqlConnection.query(
    "SELECT id, nombre_programa,icon FROM programa_postgrado WHERE estado='activo'",
    (err, rows, fields) => {
      if (!err) {
        return res(rows)
      // return res(JSON.parse(JSON.stringify(rows)))
     
      } else {
        return rej(err);
      }
    }
  );

 })
 
 
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
