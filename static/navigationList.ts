import {
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  RocketLaunchIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  PaperAirplaneIcon as PaperAirplaneIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

import { RiVideoFill, RiVideoLine } from "react-icons/ri";

export const navigationList = [
  {
    id: "home",
    title: "Home",
    solidIcon: HomeIconSolid,
    outlineIcon: HomeIcon,
    hasLink: true,
  },
  {
    id: "search",
    title: "Search",
    solidIcon: MagnifyingGlassIconSolid,
    outlineIcon: MagnifyingGlassIcon,
    hasLink: false,
  },
  {
    id: "messages",
    title: "Messages",
    solidIcon: PaperAirplaneIconSolid,
    outlineIcon: PaperAirplaneIcon,
    hasLink: true,
  },
  {
    id: "reels",
    title: "reels",
    solidIcon: RiVideoFill,
    outlineIcon: RiVideoLine,
    hasLink: true,
  },
  {
    id: "explore",
    title: "Explore",
    solidIcon: RocketLaunchIconSolid,
    outlineIcon: RocketLaunchIcon,
    hasLink: true,
  },

  {
    id: "notifications",
    title: "Notifivations",
    solidIcon: HeartIconSolid,
    outlineIcon: HeartIcon,
    hasLink: false,
  },
  {
    id: "create",
    title: "Create",
    solidIcon: PlusCircleIconSolid,
    outlineIcon: PlusCircleIcon,
    hasLink: true,
  },
];

export const mobileNavigationsList = [
  {
    id: "home",
    title: "Home",
    solidIcon: HomeIconSolid,
    outlineIcon: HomeIcon,
  },
  {
    id: "explore",
    title: "Explore",
    solidIcon: RocketLaunchIconSolid,
    outlineIcon: RocketLaunchIcon,
  },
  {
    id: "reels",
    title: "reels",
    solidIcon: RiVideoFill,
    outlineIcon: RiVideoLine,
  },
  {
    id: "create",
    title: "Create",
    solidIcon: PlusCircleIconSolid,
    outlineIcon: PlusCircleIcon,
  },
  {
    id: "messages",
    title: "Messages",
    solidIcon: PaperAirplaneIconSolid,
    outlineIcon: PaperAirplaneIcon,
  },
];
