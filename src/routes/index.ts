import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo, viewTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/todo/:id", viewTodo)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router