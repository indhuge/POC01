const { host } = require("./SiteProps");

const robots_content = `User-agent: *
Disallow: 

sitemap: ${host}/sitemap.xml
`;
function generate_robots() {
  console.log("Mode: ", process.env.ENV_TYPE);
  const fs = require("fs");
  fs.writeFileSync("public/robots.txt", robots_content);
}

module.exports = generate_robots();
