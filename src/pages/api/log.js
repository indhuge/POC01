import { pushLog } from "@/DataBase/Controller/logController";

export default async function handler(req, res) {
  const { log } = JSON.parse(req.body);
  const result = await pushLog(JSON.stringify(log));
  res.status(200).json(result);
}
