import { Tab, Tabs, Box, List } from "@mui/material";
import { useState } from "react";
import { todoList } from "../../data/todo";
import TodoListItem from "./TodoListItem";

const TodoContent = () => {
  const [todos, setTodos] = useState(todoList);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // callback function
  const onChangeTab = (e, v) => {
    setCurrentTabIndex(v);
  };

  const onChangeStatus = (id, newValue) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          todo.done = newValue;
          return todo;
        }
      })
    );
  };

  return (
    <Box>
      <Tabs value={currentTabIndex} onChange={onChangeTab}>
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      <List>
        {todos.map((todo, index) => (
          <TodoListItem
            id={todo.id}
            done={todo.done}
            content={todo.content}
            key={todo.id}
            onChangeStatus={onChangeStatus}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoContent;
