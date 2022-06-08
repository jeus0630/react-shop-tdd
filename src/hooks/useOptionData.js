import { useQuery } from "react-query";
import axios from "axios";

export const getOptions = async (orderType) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/${orderType}`
    );
    return data;
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const useGetOptionsData = (orderType) => {
  return useQuery("option", () => getOptions(orderType),{retry: 0});
};
