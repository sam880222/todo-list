import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TodoListPage from "./TodoListPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          height: "100%",
          backgroundColor: darkTheme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TodoListPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
