const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 5000;

sequelize.sync()
    .then(result => {
        app.listen(PORT, () => console.log("Server running on 5000"))
    })
    .catch(err => console.log(err || "failed to start"))

