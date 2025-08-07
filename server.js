import express from "express";
import pkg from "@react-router/node";
import path from "path";
import { fileURLToPath } from "url";

const { createRequestListener } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const build = await import("./build/server/index.js");
const app = express();

app.use("/assets", express.static(path.join(__dirname, "build/client/assets")));

// 1. Отдаём всю статику из build/client по корню
app.use(express.static(path.join(__dirname, "build/client")));

// 2. Отдаём статику из public (если нужно)
app.use(express.static(path.join(__dirname, "public")));

// 3. SSR для всех остальных запросов
app.all("*", (req, res) => createRequestListener({ build })(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
