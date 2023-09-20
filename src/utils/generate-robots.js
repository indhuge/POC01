const robots_content = `User-agent: *
Disallow: 
`;
function generate_robots() {
  const fs = require("fs");
  fs.writeFileSync("public/robots.txt", robots_content);
}

module.exports = generate_robots();
