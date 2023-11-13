import avatarStyle from "./style";
const Avatar = () => {
  return (
    <div className={avatarStyle.avatar}>
      <img
        className={avatarStyle.img}
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
