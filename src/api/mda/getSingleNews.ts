import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getSingleNews = async ({ queryKey }: any) => {
  const [_, id] = queryKey;
  const response = await axios.get(`${CORE_APP.plsg.news}/${id}`);

  return response;
};
