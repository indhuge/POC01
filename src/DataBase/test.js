const Appointment = require("./model/appointment");

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
  const comment = require("./model/comment");
  const survey = require("./model/survey_answer");
  const log = require("./model/log");
  try {
    // const resultado = await database.sync({ force: true });
    // const resultado2 = await user.sync({ force: true });
    // const resultado3 = await comment.sync({ force: true });
    // const resultado4 = await Appointment.sync({ force: true });
    // const resultado5 = await survey.sync({ force: true });
    const resultado6 = await log.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
};
syncDB();
syncDB();
