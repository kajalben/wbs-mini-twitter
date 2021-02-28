import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
const Sidebar = ({onClick}) => {
  return (
    <>
      <NavLink to="/profile" activeClassName="active-link">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </NavLink>

      <ListItem button onClick={onClick}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <NavLink to="/post/messages" activeClassName="active-link">
          <ListItemText primary="Inbox" />
        </NavLink>
      </ListItem>
    </>
  );
};

export default Sidebar;
