const port = process.env.PORT;
const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASS;
const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.hkgud.mongodb.net/coutransportation?retryWrites=true&w=majority`;

module.exports = {
  port,
  uri,
};
