const data = {};
let count = 0;

const Profile = () => {
  count++;
  // @ts-ignore
  const id = count === 1 ? data.rcp.aaa : "";
  return <h1>Profile</h1>;
};

export default Profile;
