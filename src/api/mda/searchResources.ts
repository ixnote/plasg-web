import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

const handleParams = (paramsPayload: any) => {
  if (!paramsPayload.page) {
    delete paramsPayload.page;
  }
  return paramsPayload;
};

export const searchResources = async ({ queryKey }: any) => {
  const [_, name, page, pageSize] = queryKey;
  const params = {
    page: page,
    name: name,
    pageSize: pageSize,
  };
  const response = await axios.get(
    `${CORE_APP.plsg.resources}/${name}?${new URLSearchParams(
      handleParams(params)
    ).toString()}`
  );

  return response;
};
