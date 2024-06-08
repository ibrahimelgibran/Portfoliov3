import { RoutesProps, StackProps, WorksProps } from "@/types";

export const stack: StackProps[] = [
  {
    id: 1,
    name: "Java",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "PHP",
  },
];

export const photosList = [
  {
    id: 1,
    name: "photo 1",
  },
  {
    id: 2,
    name: "photo 2",
  },
  {
    id: 3,
    name: "photo 3",
  },
  {
    id: 4,
    name: "photo 4",
  },
  {
    id: 5,
    name: "photo 5",
  },
  // {
  //   id: 6,
  //   name: "photo 6",
  // },
  // {
  //   id: 7,
  //   name: "photo 7",
  // },
  // {
  //   id: 8,
  //   name: "photo 8",
  // },
  // {
  //   id: 9,
  //   name: "photo 9",
  // },
  // {
  //   id: 10,
  //   name: "photo 10",
  // },
];

export const worksList: WorksProps[] = [
  {
    id: 1,
    thumbnail: "https://elgibran17.vercel.app/dist/img/portfolio/iegcode.png",
    name: "IEGCODE - WebApps",
    github: "https://github.com/ibrahimelgibran/iegcodev2",
    preview: "https://www.iegcode.my.id/",
    description:
      "Platform e-commerce personal who provides services your need.",
  },
  {
    id: 2,
    thumbnail:
      "https://www.iegcodestore.my.id/_next/image?url=%2Fimg%2Fss-project%2Fproject-9.jpg&w=1920&q=75",
    name: "CBT Online - WebApps",
    github: "https://github.com/ibrahimelgibran/IegCBT",
    preview: "https://ujianonline.smksmuhammadiyahgamping.sch.id/",
    description:
      "This is a CBT online SMK MUHAMMADIYAH GAMPING for students ESKAMUGA with own fiture complite.",
  },
  {
    id: 3,
    thumbnail:
      "https://www.iegcodestore.my.id/_next/image?url=%2Fimg%2Fss-project%2Fproject-2.png&w=1920&q=75",
    name: "PPDB Online - WebApps",
    github: "https://github.com/ibrahimelgibran/ci-Eskamuga",
    preview: "https://ppdbv2.smksmuhammadiyahgamping.sch.id/",
    description: "A Website Profile and PPDB Online 2024-2025.",
  },
  {
    id: 4,
    thumbnail:
      "https://www.iegcodestore.my.id/_next/image?url=%2Fimg%2Fss-project%2Fproject-04.png&w=1920&q=75",
    name: "CMS Scholl - WebApps",
    github: "https://github.com/ibrahimelgibran/Final-Project-CMS",
    preview: "https://info-jadwal-sholat.vercel.app",
    description: "Profil WebApps CMS (Content Manajement System) ESKAMUGA.",
  },
  {
    id: 5,
    thumbnail:
      "https://www.iegcodestore.my.id/_next/image?url=%2Fimg%2Fss-project%2Fproject-011.png&w=1920&q=75",
    name: "GMT - WebApps",
    github: "https://github.com/ibrahimelgibran/GemilangMultiTeknologi",
    preview: "https://www.gemilangmultiteknologi.my.id/",
    description: "Profil WebApps CMS (Content Manajement System) ESKAMUGA.",
  },
  {
    id: 6,
    thumbnail: "https://elgibran17.vercel.app/dist/img/portfolio/cleanee.png",
    name: "Cleanee - WebApps",
    github: "https://github.com/ibrahimelgibran/Ci-CleaneeWebApp",
    preview: "https://www.cleanee.my.id/",
    description:
      "Cleanee is here to solve waste problems to integrated waste processing, Cleanee creates digitized and efficient waste processing for the community.",
  },
];

export const routesList: RoutesProps[] = [
  {
    id: 1,
    name: "/works",
  },
  {
    id: 2,
    name: "/photos",
  },
  {
    id: 3,
    name: "/contact",
  },
];
