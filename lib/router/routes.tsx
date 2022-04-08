import { MessageDescriptor } from "react-intl";
import {
  History,
  Home,
  LayersSubtract,
  Settings,
  UserCircle,
} from "tabler-icons-react";
import messages from "../i18n/messages";

export const ROUTES = {
  root: "/",
  rooms: "/rooms",
  rooms_detail: "/rooms-detail",
  queues: "/queues",
  history: "/history",
  settings: "/settings",
  profile: "/profile",
  users: "/users",
  terms_of_services: "/terms-of-services",
  privacy_policy: "/privacy-policy",
};

export type NavigationRoute = { pathname: string; label: MessageDescriptor };
export type HeaderLink = NavigationRoute & {
  sublinks?: NavigationRoute[];
};

export const navigationRoutes: HeaderLink[] = [
  { pathname: ROUTES.root, label: messages["header.links.home"] },
  { pathname: ROUTES.rooms, label: messages["header.links.rooms"] },
  { pathname: ROUTES.queues, label: messages["header.links.queues"] },
  { pathname: ROUTES.history, label: messages["header.links.history"] },
  { pathname: ROUTES.settings, label: messages["header.links.settings"] },
];

export type BottomRoute = { pathname: string; icon: JSX.Element };
export const bottomRoutes: BottomRoute[] = [
  { pathname: ROUTES.root, icon: <Home size={32} /> },
  { pathname: ROUTES.rooms, icon: <LayersSubtract size={32} /> },
  { pathname: ROUTES.profile, icon: <UserCircle size={32} /> },
  { pathname: ROUTES.history, icon: <History size={32} /> },
  { pathname: ROUTES.settings, icon: <Settings size={32} /> },
];
