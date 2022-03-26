export const ROUTES = {
  root: "/",
  history: "/history",
  settings: "/settings",
  profile: "/profile",
  users: "/users",
  user: (id: string) => `/users/:${id}`,
  terms_of_services: "/terms-of-services",
  privacy_policy: "/privacy-policy",
};
