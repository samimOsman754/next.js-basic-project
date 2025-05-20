import { IUser } from "@/app/(root)/user-server/page";

const User = ({ user }: { user: IUser }) => {
  return (
    <div>
      <h2>{user.id}</h2>
      <p>Username: {user.name}</p>
    </div>
  );
};

export default User;

