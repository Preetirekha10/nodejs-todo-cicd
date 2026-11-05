const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todos = [];
let nextId = 1;

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const title = String(req.body.title || "").trim();
  if (!title) return res.status(400).json({ error: "Task title is required." });

  const todo = { id: nextId++, title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.patch("/api/todos/:id", (req, res) => {
  const todo = todos.find(item => item.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Task not found." });

  if (typeof req.body.completed === "boolean") {
    todo.completed = req.body.completed;
  }
  if (typeof req.body.title === "string" && req.body.title.trim()) {
    todo.title = req.body.title.trim();
  }
  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(item => item.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found." });

  todos.splice(index, 1);
  res.status(204).end();
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`To-Do app running on http://localhost:${PORT}`);
});
