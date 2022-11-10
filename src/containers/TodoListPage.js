import { Box, Typography } from "@mui/material";
import TodoContent from "../components/todo_list/TodoContent";

const TodoListPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" color="textPrimary">
        ToDo
      </Typography>
      <TodoContent />
    </Box>
  );
};

export default TodoListPage;
