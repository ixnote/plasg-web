import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getMda = async ({ queryKey }: any) => {
  const [_, id] = queryKey;
  const response = await axios.get(`${CORE_APP.plsg.mda}/single/${id}`);

  return response;
};
