# Node.js To-Do App with Docker

A beginner-friendly To-Do application built with Node.js, Express, HTML, CSS, and JavaScript.

## Features
- Add a task
- Mark a task as complete/incomplete
- Delete a task
- REST API powered by Express

> Note: This starter version stores tasks in memory. Tasks reset when the container restarts. Add a database or persistent volume for durable storage.

## Run locally (without Docker)

```bash
npm install
npm start
```

Open http://localhost:3000.

## Build and run with Docker

Build the image:

```bash
docker build -t nodejs-todo .
```

Run the container:

```bash
docker run -d --name todo-app -p 3000:3000 nodejs-todo
```

Open http://localhost:3000.

Check the running container:

```bash
docker ps
docker logs todo-app
```

Stop and remove it:

```bash
docker stop todo-app
docker rm todo-app
```

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/todos` | List tasks |
| POST | `/api/todos` | Add a task (`{"title":"Learn Docker"}`) |
| PATCH | `/api/todos/:id` | Update completion or title |
| DELETE | `/api/todos/:id` | Delete a task |
