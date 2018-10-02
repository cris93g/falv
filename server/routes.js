const {
  getProducts,
  getTops,
  getBottoms,
  getAcessorys
} = require("./productCtrl");

const routes = app => {
  app.get("/healthcheck", (req, res) => {
    res.send({
      message: "Ok"
    });
  });

  app.get("/api/products", getProducts);
  app.get("/api/tops", getTops);
  app.get("/api/bottoms", getBottoms);
  app.get("/api/acessorys", getAcessorys);
};

module.exports = routes;
