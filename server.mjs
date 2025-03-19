// server.mjs
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import path from "node:path";

const server = createServer((req, res) => {
  const outputFile = path.join(process.cwd(), "/pages/index.jsx");
  let varData;
  try {
    const data = readFileSync(outputFile, "utf-8");
    const data1 = data.split("return");
    const data2 = data1[1].split("(");
    const data3 = data2[1].split(")");
    varData = data3[0];
  } catch (error) {
    console.error(error);
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(varData);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
