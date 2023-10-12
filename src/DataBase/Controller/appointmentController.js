export async function addAppointment(name, date, email, company) {
  const model = require("../model/appointment");
  console.log(date);
  const result = await model.create({
    Name: name,
    Company: company,
    Date: date,
    Confirmed: false,
    Email: email,
    Reserved: true,
  });
  return result;
}

export async function confirmAppointment(id) {
  const model = require("../model/appointment");
  const result = await model.update({ Confirmed: true }, { where: { id: id } });
  return result;
}

export async function getAppointment(id) {
  const model = require("../model/appointment");
  return await model.findByPk(id);
}
