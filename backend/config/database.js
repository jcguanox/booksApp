import Sequelize  from  "sequelize";

const sequelize = new Sequelize("library","user", "123", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
