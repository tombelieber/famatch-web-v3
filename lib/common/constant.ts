import { DefaultMantineColor } from "@mantine/core";

export type ServiceStat = {
  label: string;
  count: string;
  color: DefaultMantineColor;
};

export type ServiceData = {
  slug: string;
  subscribed?: boolean; // receive update on room change
  image: string;
  title: string;
  description: string;
  stat: {
    queue: ServiceStat;
    room: ServiceStat;
    matched: ServiceStat;
  };
};
const netflixIcon =
  "data:image/png;base64,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";

export const serviceIcons: ServiceData[] = [
  {
    image:
      "data:image/png;base64,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",
    title: "Nintendo Switch",
    slug: "nintendo-switch",
    description:
      "家庭計劃是包含購買使用券的Nintendo Account，所有家庭成員（最多8個帳號）都能使用服務的計劃。",
    stat: {
      room: { label: "房間", count: "2", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
  {
    subscribed: true,
    image:
      "data:image/png;base64,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",
    title: "Spotify",
    slug: "spotify",
    description:
      "6 個 Premium 帳戶，適用於同住在一個屋簷下的家庭成員。每月 HK$98.00。 可隨時取消。",
    stat: {
      room: { label: "房間", count: "0", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
  {
    image: netflixIcon,
    title: "Netflix",
    slug: "netflix",
    description:
      "Netflix收費由每月月費HK$63至HK$93不等，分標準畫質、高畫質（HD)及超高畫質（UHD 4K），最多4人共用，除開最平一人HK$23.3一個月，",
    stat: {
      room: { label: "房間", count: "0", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
  {
    image:
      "data:image/png;base64,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",
    title: "YouTube Premium",
    slug: "youtube-premium",
    description:
      "家庭方案 • 月費制 • 免費試用 1 個月 • 之後每月只要 HK$98.00 • 最多可新增 5 位滿 13 歲的家庭成員。",
    stat: {
      room: { label: "房間", count: "0", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
  {
    image:
      "https://thumbor.4gamers.com.tw/C5KHz5X-Wwz4HIRjLOcR145tGUs=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fpuku-clone-version%2F0a77a00513e34f84fffac8a35a516452492ff1dd.jpg",
    title: "iCloud",
    slug: "icloud",
    description:
      "透過「家人共享」，你最多可與另外五位家庭成員共享一個 iCloud+ 服務計劃。",
    stat: {
      room: { label: "房間", count: "0", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
  {
    image:
      "https://m.leiphone.com/uploads/new/article/pic/201808/5b74e9b683976.png",
    title: "Google One",
    slug: "google-one",
    description:
      "Google One 可透過「家庭群組」同最多 5 位家庭成員（即共 6 人）共享一個雲端空間",
    stat: {
      room: { label: "房間", count: "0", color: "blue" },
      matched: { label: "已配對", count: "15", color: "green" },
      queue: { label: "等待中", count: "0", color: "red" },
    },
  },
];

export interface Member {
  name: string;
  avatar: string;
}
export interface RoomPreview {
  id: number;
  service: {
    name: string;
    image: string;
  };
  createdAt: Date;
  members: Member[];
  status: string;
  paymentStatus: string;
  max: number;
}

export const avatarIcon =
  "https://lh3.googleusercontent.com/ogw/ADea4I76mKjhc-GF8Xsi3Y8WXYlBeryAHWVWUd8ad__NIdU=s64-c-mo";

export const roomsData: RoomPreview[] = [
  {
    id: 0,
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
    createdAt: new Date(),
    members: [
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
    ],
    status: "OPEN",
    paymentStatus: "PAID",
    max: 8,
  },
  {
    id: 1,
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
    createdAt: new Date(),
    members: [
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
    ],
    status: "OPEN",
    paymentStatus: "PAID",
    max: 8,
  },
  {
    id: 2,
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
    createdAt: new Date(),
    members: [
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
    ],
    status: "OPEN",
    paymentStatus: "PAID",
    max: 8,
  },
  {
    id: 3,
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
    createdAt: new Date(),
    members: [
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
    ],
    status: "OPEN",
    paymentStatus: "PAID",
    max: 8,
  },
  {
    id: 4,
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
    createdAt: new Date(),
    members: [
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
      { name: "Tom", avatar: avatarIcon },
    ],
    status: "OPEN",
    paymentStatus: "PAID",
    max: 8,
  },
];

export type QueueData = {
  createdAt: Date;
  expiredAt: Date;
  id: number;
  service: {
    name: string;
    image: string;
  };
};
export const queueData: QueueData[] = [
  {
    id: 0,
    createdAt: new Date("2022-04-01"),
    expiredAt: new Date("2022-04-30"),
    service: {
      name: "Netflix",
      image: netflixIcon,
    },
  },
  {
    createdAt: new Date("2022-04-02"),
    expiredAt: new Date("2022-05-01"),
    id: 1,
    service: {
      name: "Spotify",
      image:
        "data:image/png;base64,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",
    },
  },
];
