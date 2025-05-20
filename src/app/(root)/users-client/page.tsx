import GetUsersToClient from "@/commponents/Users/GetUsersToClient";

const GetUsersFromClientpage = async () => {
  await new Promise ((resolve) => setTimeout(resolve, 1000)); // Simulate a delay 
  return (
    <div>
      <h1>Getting Users from client</h1>
      <p>This page demonstrates how to fatch data from a client-side API</p>
      <GetUsersToClient/>
    </div>
  );
};

export default GetUsersFromClientpage;
