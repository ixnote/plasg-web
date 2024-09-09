import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

export const getMda = async ({ queryKey }: any) => {
  console.log("🚀 ~ getMda ~ queryKey:", queryKey);
  const [_, slug] = queryKey;
  const response = await axios.get(`${CORE_APP.plsg.mda}/slug/${slug}`);

  return response;
};
