import axios from "axios";
import CORE_APP from "../URI/CORE_APP";

const handleParams = (paramsPayload: any) => {
  if (!paramsPayload.start) {
    delete paramsPayload.start;
  }
  if (!paramsPayload.start) {
    delete paramsPayload.start;
  }
  if (!paramsPayload.end) {
    delete paramsPayload.end;
  }
  if (!paramsPayload.tag) {
    delete paramsPayload.tag;
  }
  if (!paramsPayload.header) {
    delete paramsPayload.header;
  }
  if (!paramsPayload.is_posted) {
    delete paramsPayload.is_posted;
  }
  return paramsPayload;
};

export const getNews = async ({ queryKey }: any) => {
  const [_, page, pageSize, start, end, tag, header, is_posted] = queryKey;
  const params = {
    page: page,
    pageSize: pageSize,
    start: start,
    end: end,
    tag: tag,
    header: header,
    is_posted: is_posted,
  };
  const response = await axios.get(
    `${CORE_APP.plsg.news}?${new URLSearchParams(
      handleParams(params)
    ).toString()}`
  );

  return response;
};
