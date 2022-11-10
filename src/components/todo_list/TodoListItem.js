import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TodoListItem = ({ id, done, content, onChangeStatus }) => {
  const onClickCheck = (e) => {
    const newChecked = e.target.checked;
    onChangeStatus(id, newChecked);
  };

  return (
    <ListItem
      secondaryAction={<IconButton edge="end"></IconButton>}
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => {}} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={done}
            tabIndex={-1}
            onChange={onClickCheck}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          id={""}
          primary={content}
          primaryTypographyProps={{ sx: { color: "white" } }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
