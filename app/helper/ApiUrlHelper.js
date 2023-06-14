const baseUrl = 'http://localhost:3001/';

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
}

const get = () => {
  return baseUrl + "user/get";
}

const update = () => {
  return baseUrl + "user/update";
}

const createPost = () => {
  return baseUrl + "user/createPost";
}

const updatePost = () => {
  return baseUrl + "user/updatePost";
}

export { getPosts, getPostDetails, login, getUserPost, get, update, createPost, updatePost };
