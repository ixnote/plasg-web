import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

const handleParams = (paramsPayload: any) => {
  if (!paramsPayload.page) {
    delete paramsPayload.page;
  }
  return paramsPayload;
};

export const getTourism = async ({ queryKey }: any) => {
  const [_, page, pageSize] = queryKey;
  const params = {
    page: page,
    pageSize: pageSize,
  };
  const response = await axios.get(
    `${CORE_APP.plsg.destinations}?${new URLSearchParams(
      handleParams(params)
    ).toString()}`
  );

  return response;
};
