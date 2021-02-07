// Auth Actions
export const signIn = (
  userId,
  userName,
  first_name,
  last_name,
  email,
  image,
  admin
) => {
  return {
    type: "SIGN_IN",
    payload: {
      userId,
      userName,
      first_name,
      last_name,
      email,
      image,
      admin,
    },
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
