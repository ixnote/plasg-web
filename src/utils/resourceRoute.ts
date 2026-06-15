export const getResourceDetailPath = (id: unknown) => {
  if (!id) return "/search";

  return `/search/?id=${encodeURIComponent(String(id))}`;
};
