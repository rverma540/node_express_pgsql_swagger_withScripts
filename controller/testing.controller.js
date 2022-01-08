const pool = require("../config/db.config");
const queries = require("./queries");

const getUsers = async (req, res) => {
  try {
    let poolresult = await pool.query(queries.getusers);
    res.json(poolresult.rows);
  } catch (err) {
    console.error(err);
  }
};
//GET USER BY ID-------------------------------------------------------------------------------------------------------------------------------------------------------------
const getUsersById = async (req, res) => {
  console.log();
  const id = parseInt(req.params.id);
  console.log(id);
  try {
    let poolresult = await pool.query(queries.getusersbyid, [id]);
    res.json(poolresult.rows);
  } catch (err) {
    console.error(err);
  }
};
//REMOVE USERS-------------------------------------------------------------------------------------------------------------------------------------------------------------
const deleteUsers = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getusersbyid, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.json({ status: -1, message: "User does not exist in the datbase " });
    } else {
      pool.query(queries.deleteusers, [id], (error, results) => {
        if (error) throw error;
        res
          .status(200)
          .json({ status: 1, message: "user remove successfully" });
      });
    }
  });
};
//ADD  USERS
const getAddusers = async (req, res) => {
  const { name, email } = req.body;
  try {
    pool.query(queries.addusers, [name, email], (error, results) => {
      if (error) {
        res.status(201).json({
          status: -1,
          message: "User  not added unsuccesfully..",
          error: error,
        });
      } else {
        res.status(201).json({
          status: 1,
          message: "User added succesfully",
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
};

// UPDATE USER VALUE
const updateUserbyid = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  pool.query(queries.getusersbyid, [id], (error, results) => {
    const nousers = !results.rows.length;
    if (nousers) {
      res.json({
        status: -1,
        message: "user  update unsuccessfully  ",
      });
    } else {
      pool.query(queries.updateusers, [name, email, id], (error, results) => {
        if (error) throw error;
        res.status(200).json({
          status: 1,
          message: "user updated successfully",
        });
      });
    }
  });
};

//MODULE EXPORTS -----------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = {
  getUsers,
  getAddusers,
  getUsersById,
  updateUserbyid,
  deleteUsers,
};
