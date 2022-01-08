const getusers = "SELECT * FROM  test";
const getusersbyid = "SELECT * FROM test WHERE id = $1";
const deleteusers = "DELETE FROM test WHERE id = $1";
const addusers = "INSERT INTO test (name,email) VALUES ($1,$2)";
const updateusers = "UPDATE test SET name=$1, email=$2 WHERE id= $3";

module.exports = {
  getusers,
  getusersbyid,
  deleteusers,
  addusers,
  updateusers,
};
