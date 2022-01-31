import axios from "axios";

// axios.get
// axios.post
// axios.patch
// axios.delete

// hey axios : please return a configured version of yourself

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // usefull when using cookies for authentication
});

// ... will be available in =>

// instance.get
// instance.post
// instance.patch
// instance.delete

export default instance;
