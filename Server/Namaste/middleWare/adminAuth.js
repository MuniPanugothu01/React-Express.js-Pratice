const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!");
  const token = "abv";
  const adminAuthorized = token === "abv";
  if (!adminAuthorized) {
    res.status(401).send("admin is not authorized!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user auth is getting checked!");
};

module.exports = {
  adminAuth,
  userAuth,
};
