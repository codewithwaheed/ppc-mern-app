const INITAIL_STATE = {
  isSignedIn: null,
  userId: null,
  userName: "User Name",
  first_name: "User",
  last_name: "Name",
  image: "",
  email: "abc@email.com",
  admin: null,
};
export const authReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      const {
        userId,
        userName,
        first_name,
        last_name,
        email,
        image,
        admin,
      } = action.payload;
      return {
        ...state,
        isSignedIn: true,
        userId,
        userName,
        first_name,
        last_name,
        email,
        image,
        admin,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        userName: "User name",
        first_name: "User",
        last_name: "Name",
        image: "",
        email: "abc@email.com",
        admin: null,
      };
    default:
      return state;
  }
};
