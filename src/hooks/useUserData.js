import { useQuery } from "react-query";
import axios from "axios";

export const getUsers = async (orderType) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/${orderType}`
    );
    return data;
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const useGetUsersData = (orderType) => {
  return useQuery("user", () => getUsers(orderType),{retry: 0});
};
