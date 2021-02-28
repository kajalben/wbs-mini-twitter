const Profile = ({text ,image_url, email}) => {
  return (
    <>
    <div className="user-container">
      <img src={image_url} alt='user-image' />
      <p>{text}</p>
      <span>{email}</span>
    </div>
    </>)
};

export default Profile;
