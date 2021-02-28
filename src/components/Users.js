import {Fragment} from 'react'
import { useHistory } from "react-router-dom";

const Users = ({ users }) => {
  const history = useHistory();

  const handleClick = (id) => {
    console.log("id =" + id);
    history.push(`/post/user/${id}`);
  };

  return (
    <>
      <div className="users-container">
        {users.map((user) => {
          return (
            <Fragment key={user._id}>
              <img
                src={user.profile_img_url}
                alt="user-profile-image"
                onClick={(id) => handleClick(user._id)}
              />
              <p>{user.name}</p>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Users;
