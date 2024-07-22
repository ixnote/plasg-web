import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

const handleParams = (paramsPayload: any) => {
  if (!paramsPayload.page) {
    delete paramsPayload.page;
  }
  if (!paramsPayload.name) {
    delete paramsPayload.name;
  }
  if (!paramsPayload.pageSize) {
    delete paramsPayload.pageSize;
  }
  return paramsPayload;
};

export const getMdas = async ({ queryKey }: any) => {
  const [_, page, pageSize, name] = queryKey;
  const params = {
    page: page,
    name: name,
    pageSize: pageSize,
  };

  const response = await axios.get(
    `${CORE_APP.plsg.mda}?${new URLSearchParams(
      handleParams(params)
    ).toString()}`
  );

  return response;
};
