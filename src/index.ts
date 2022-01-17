import TodoItem from "./TodoItem";
import { data } from "./data";

console.log("My TOdo List");
for (let i = 0; i < data.length; i++) {
  const todo = data[i];
  let todoItem = new TodoItem(todo.id, todo.task, todo.complete);
  todoItem.printDetails();
}
