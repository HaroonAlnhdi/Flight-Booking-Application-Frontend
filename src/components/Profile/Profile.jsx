

const profile = ({user}) => {
  return (
    console.log(user),
    <div>
      <h1>{user._id}</h1>
      <h2>{user.username}</h2>
      <h3>{user.first_name}</h3>
      <h4>{user.Last_name}</h4>
    </div>
  );
}

export default profile;