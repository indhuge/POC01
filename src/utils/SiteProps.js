module.exports = {
  host:
    process.env.ENV_TYPE == "prod"
      ? "https://poc-01-sand.vercel.app"
      : "http://localhost:3000",
};
