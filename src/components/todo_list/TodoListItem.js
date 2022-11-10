import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TodoListItem = () => {
  return (
    <ListItem
      secondaryAction={<IconButton edge="end"></IconButton>}
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => {}} dense>
        <ListItemIcon>
          <Checkbox edge="start" checked={true} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText
          id={""}
          primary={`Line item `}
          primaryTypographyProps={{ sx: { color: "white" } }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
