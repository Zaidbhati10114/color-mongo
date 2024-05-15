import { Icon } from "@iconify/react";
import { FilePlus, PartyPopper } from "lucide-react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Popular",
    path: "/popular",
    icon: <Icon icon="lucide:gift" width="24" height="24" />,
  },
  {
    title: "New",
    path: "/new",
    icon: <Icon icon="lucide:plus" width="24" height="24" />,
  },
];

// <PartyPopper width="24" height="24" />
