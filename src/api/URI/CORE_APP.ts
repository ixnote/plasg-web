const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const CORE_APP = {
  plsg: {
    // auth
    mda: `${BASE_URL}/mda`,
    news: `${BASE_URL}/news`,
    resources: `${BASE_URL}/resource`,
    users: `${BASE_URL}/user`,
    legislatives: `${BASE_URL}/statics/legislatives`,
    destinations: `${BASE_URL}/statics/destinations`,
  },
};
export default CORE_APP;
