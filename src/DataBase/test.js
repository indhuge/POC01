const fun = async () => {
  const database = require("./db");
  const user = require("./model/user");

  const resultado = await user.create({
    Nome: "Teste",
  });

  console.log(resultado);
};
//fun();

const syncDB = async () => {
  const database = require("./db");
  const user = require("./model/user");
  const comment = require("./comment");
  try {
    const resultado = await database.sync({ force: true });
    const resultado2 = await user.sync({ force: true });
    const resultado3 = await comment.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
};
//syncDB();
