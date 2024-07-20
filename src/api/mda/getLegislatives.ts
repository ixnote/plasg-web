import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getLegislatives = async ({ queryKey }: any) => {
  const [_] = queryKey;
  const response = await axios.get(`${CORE_APP.plsg.legislatives}`);

  return response;
};
