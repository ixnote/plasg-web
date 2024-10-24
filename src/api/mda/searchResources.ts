import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

const handleParams = (paramsPayload: any) => {
  if (!paramsPayload.name) {
    delete paramsPayload.name;
  }
  if (!paramsPayload.sort) {
    delete paramsPayload.sort;
  }
  return paramsPayload;
};

export const searchResources = async ({ queryKey }: any) => {
  const [_, name, currentPage, pageSize, sort] = queryKey;
  const params = {
    page: currentPage,
    name: name,
    pageSize: pageSize,
    sort: sort,
  };

  console.log("name :>> ", name);
  const response = await axios.get(
    `${CORE_APP.plsg.search}?${new URLSearchParams(
      handleParams(params)
    ).toString()}`
  );

  return response;
};
