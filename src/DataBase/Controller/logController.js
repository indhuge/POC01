export async function pushLog(log) {
  const model = require("../model/log");
  const result = await model.create({
    log: log,
  });
  return result;
}
