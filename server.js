import express from "express";
import { createRequestListener } from "@react-router/node";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const build = await import("./build/server/index.js");

console.log("SSR build:", build.routes);
for (const key in build.routes) {
  console.log(
    `Route ${key}: path = "${build.routes[key].path}", index = ${build.routes[key].index}`,
  );
}
const app = express();

app.use("/assets", express.static(path.join(__dirname, "build/client/assets")));
app.use(express.static(path.join(__dirname, "build/client")));
app.use(express.static(path.join(__dirname, "public")));

app.all("*", (req, res) => createRequestListener({ build })(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
