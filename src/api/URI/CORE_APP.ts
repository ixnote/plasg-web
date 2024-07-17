const BASE_URL = process.env.NEXT_PUBLIC_API_URI;

const CORE_APP = {
  plsg: {
    // auth
    mda: `${BASE_URL}mda`,
    news: `${BASE_URL}news`,
    resources: `${BASE_URL}resource`,
    users: `${BASE_URL}user`,
  },
};
export default CORE_APP;
