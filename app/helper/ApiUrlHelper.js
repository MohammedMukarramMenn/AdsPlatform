// const baseUrl = "http://localhost:3001/";
// const baseUrl = "http://192.168.1.23:3001/";
const baseUrl = "http://apiadsplatform.demandesk.com/";

const getPosts = () => {
  return baseUrl + "user/posts";
};

const getPostDetails = (title) => {
  return baseUrl + "user/postDetails?title=" + title;
};

const login = () => {
  return baseUrl + "auth/login";
};

const getUserPost = () => {
  return baseUrl + "user/getUserPost";
};

const get = () => {
  return baseUrl + "user/get";
};

const update = () => {
  return baseUrl + "user/update";
};

const createPost = () => {
  return baseUrl + "user/createPost";
};

const updatePost = () => {
  return baseUrl + "user/updatePost";
};

const forgetPassword = () => {
  return baseUrl + "auth/forgetPassword";
};

const resetPassword = () => {
  return baseUrl + "auth/resetPassword";
};

const validateEmail = () => {
  return baseUrl + "auth/validateEmail";
};

const register = () => {
  return baseUrl + "auth/register";
}

const getImage = (name) => {
  return baseUrl + "images/" + name;
}

const updatePostImage = () => {
  return baseUrl + "user/updatePostImage";
}


export {
  getPosts,
  getPostDetails,
  login,
  getUserPost,
  get,
  update,
  createPost,
  updatePost,
  forgetPassword,
  resetPassword,
  validateEmail,
  register,
  getImage,
  updatePostImage
};
