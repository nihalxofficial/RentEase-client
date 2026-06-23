import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user;
};


export const getRequiredRole = async(role)=> {
  const user = await getUserSession();
  console.log(user);
  if(!user){
    redirect("/auth/login");
  }
  const currentRole = user?.role;
  if(currentRole!==role){
    redirect("/unauthorized");
  }
}