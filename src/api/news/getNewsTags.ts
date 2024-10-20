import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getNewsTags = async () => {
  const response = await axios.get(CORE_APP.plsg.news_tags);

  return response;
};
