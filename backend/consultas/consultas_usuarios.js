const pool = require("../config/conexion");
const bcrypt = require("bcryptjs");

const agregarUsuarioBD = async (name,email, password) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordEncriptada = bcrypt.hashSync(password, salt);
  console.log(passwordEncriptada);
  const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3)";
  const values = [name,email, passwordEncriptada];
  try {
    await pool.query(consulta, values);
  } catch (error) {
    return false;
  }
  return true;
};

const loginBD = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  try {
    const { rowCount, rows } = await pool.query(consulta, values);
    if (!rowCount) {
      return false;
    }
    const passwordValido = bcrypt.compareSync(password, rows[0].password);
    if (passwordValido) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const obtenerUsuarioLogueadoBD = async (email) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};

module.exports = { agregarUsuarioBD, loginBD, obtenerUsuarioLogueadoBD };