import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";


const   HomePage = async() =>  {

  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
 <main>
  <h2>welcome , {user.firstName}</h2>

  <AddTransaction/>
 </main>
  );
}

export default HomePage;
