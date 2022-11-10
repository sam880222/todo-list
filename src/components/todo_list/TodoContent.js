import { Tab, Tabs, Box, List } from "@mui/material";
import TodoListItem from "./TodoListItem";

const TodoContent = () => {
  return (
    <Box>
      <Tabs value={0} onChange={() => {}}>
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      <List>
        {[0, 1, 2, 3].map((value) => (
          <TodoListItem key={value} />
        ))}
      </List>
    </Box>
  );
};

export default TodoContent;
