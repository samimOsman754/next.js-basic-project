"use client";
import { fetchData } from "@/app/(root)/lib/fetchDatas";
import { IUser } from "@/app/(root)/user-server/page";
import User from "./User";
import { use } from "react";

const GetUsersToClient = () => {
  const users: IUser[] = use(fetchData());
  return (
    <div>
      {users.map((user: IUser) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default GetUsersToClient;
