import axios from "axios";
const fetchData = async (e) => {
    try {
        const res = await axios.get("https://api.github.com/users");
        return (res.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getUsers = async (text) => {
    try{
        const res = await axios.get(`https://api.github.com/search/users?q=${text} `);
        return (res.data.items);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getUserInfor = async (name) => {
    try{
        const res = await axios.get(`https://api.github.com/users/${name}`);
        return (res.data);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
const getUserReposAPI = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return (response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
export {getUsers, getUserInfor, getUserReposAPI, fetchData}