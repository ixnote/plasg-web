import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getActiveGovernment = async () => {
  const response = await axios.get(`${CORE_APP.plsg.active_government}`);

  return response.data.data;
};
