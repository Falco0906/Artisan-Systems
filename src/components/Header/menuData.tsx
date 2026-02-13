import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Automations",
        path: "/#features",
        newTab: false,
      },
      {
        id: 22,
        title: "Agentic Workflows",
        path: "/#features",
        newTab: false,
      },
      {
        id: 23,
        title: "Web Development",
        path: "/#features",
        newTab: false,
      },
      {
        id: 24,
        title: "AI/ML Research",
        path: "/#features",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
];
export default menuData;
