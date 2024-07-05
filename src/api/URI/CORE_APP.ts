const BASE_URL = process.env.NEXT_PUBLIC_API_URI;

const CORE_APP = {
  plsg: {
    // auth
    mda: `${BASE_URL}mda`,
    news: `${BASE_URL}news`,
    resources: `${BASE_URL}resource`,
  },
};
export default CORE_APP;
