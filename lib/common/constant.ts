import { MessageDescriptor } from "react-intl";
import messages from "../i18n/messages";
import { ROUTES } from "../router/routes";

export type RouteLink = { pathname: string; label: MessageDescriptor };
export type HeaderLink = RouteLink & {
  sublinks?: RouteLink[];
};

export const headerLinks: HeaderLink[] = [
  { pathname: ROUTES.root, label: messages["header.links.home"] },
  { pathname: ROUTES.rooms, label: messages["header.links.rooms"] },
  { pathname: ROUTES.history, label: messages["header.links.history"] },
  { pathname: ROUTES.settings, label: messages["header.links.settings"] },
];
