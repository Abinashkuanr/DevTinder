const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked");

    const token = "xyz";  // later we will take from headers
    const isAdminAuthorized = token === "xyz";

    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request");
    }

    next();
};

const userAuth = (req, res, next) => {
    console.log("user auth is getting checked");

    const token = "xyzuuu";  // later we will take from headers
    const isAdminAuthorized = token === "xyz";

    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request");
    }

    next();
};

module.exports = {
    adminAuth,
    userAuth
};