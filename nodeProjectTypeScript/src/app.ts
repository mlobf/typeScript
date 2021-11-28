//const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import todosRoutes from "./routes/todos";

const app = express();

app.use("/todos", todosRoutes);

app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		res.status(500).json({
			message: err.message,
		});
	}
);

app.listen(3000);
