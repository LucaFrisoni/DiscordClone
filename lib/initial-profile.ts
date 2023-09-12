import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.profile.findUnique({ where: { userId: user.id } });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  return newProfile;
};

//  const user = await currentUser();

//  if (!user) {
//    return redirectToSignIn();
//  }
//  try {
//    const { data } = await axios.get(
//      `http://localhost:3001/profile?userId=${user.id}`
//    );

//    if (data) {
//      return data;
//    }
//  } catch (error) {
//    // no pongo nada aca porque creo un error aproposito
//  }
//  try {
//    const { data } = await axios.post("http://localhost:3001/createprofile", {
//      userId: user.id,
//      name: `${user.firstName} ${user.lastName}`,
//      imageUrl: user.imageUrl,
//      email: user.emailAddresses[0].emailAddress,
//    });

//    return data;
//  } catch (error) {
//    console.log("2 erorr");
//    console.error(error);
//  }
