import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    cursor: "pointer",
    "& > *": {
      margin: theme.spacing(1),
      width: `calc(100%)`,
    },
  },
  paper: {
    padding: "0.5rem",
  },
  purple: {
    backgroundColor: "#00227b",
  },
}));

export default function Card({ _id, date, text, image_url, user, users }) {
  const [twitter, settwitter] = useState();
  const history = useHistory();

  const classes = useStyles();
  const changeDate = (date) => {
    const newDate = new Date(date);
    return " " + newDate.toDateString();
  };

  useEffect(() => {
    const myUser = users.find((twitterUser) => twitterUser._id === user);
    if (myUser) settwitter(myUser);
  }, []);

  const handleClick = (id) => {
    history.push(`/post/messages/${id}`);
  };

  return (
    <div className={classes.root}>
      {twitter && (
        <Paper className={classes.paper} elevation={3}>
          <div className="card-container">
            <div className="card-menu">
              <Avatar
                alt="Travis Howard"
                src={twitter.profile_img_url}
                className={classes.large}
              />
              <span>
                <ScheduleIcon />
                {changeDate(date)}
              </span>
            </div>
            <div className="card-text">{text}</div>
            <img
              className="card-img"
              src={image_url}
              alt="image"
              onClick={(id) => handleClick(_id)}
            />
          </div>
        </Paper>
      )}
    </div>
  );
}
