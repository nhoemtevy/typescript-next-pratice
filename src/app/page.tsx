
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { UserType } from "@/types/users";
import UserCard from "@/components/cards/UserCardComponent";

async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.org/users", {
    cache: "no-store"
  });
  const res = await users.json();
  return res;
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <>
      <div className="mt-10 flex text-center flex-col justify-center flex-wrap gap-5">
        <h1 className="font-bold text-larget text-blue-600">This is Poppins font</h1>
        <h1 className="font-bold text-large text-orange-500">នេះជាប្រភេទអក្សរកន្ទុមរុយប្រូ</h1>
        <h1 className="font-kantumruy ">នេះជាប្រភេទអក្សរកន្ទុមរុយប្រូ</h1>
        <Suspense fallback={<LoadingComponent/>} >
        </Suspense>
      </div>
      {/* <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hi</h1>
        <Suspense fallback={<LoadingComponent/>} >
        {users?.map((user: UserType) => (
          <UserCard
            key={user.id}
            lastname={user.lastname}
            email={user.email}
          />
        ))}
        </Suspense>
      </div> */}
    </>
  );
}
