import type { Post } from "../types/post.ts";

export const posts: Post[] = [
  {
    id: 1,
    title: "Dota 2 гайд",
    content: "Почніть з основних механік та гайду",
    author: "Георгій",
    category: "Ігри",
  },
  {
    id: 2,
    title: "Топ 100 грвців в шахи",
    content: "Магнус Карлсон",
    author: "Богдан",
    category: "Соцмережі",
  },
  {
    id: 3,
    title: "CS2 гайд",
    content: "Вивчіть базу",
    author: "Георгій",
    category: "Ігри",
  },
  {
    id: 4,
    title: "TypeScript чи JavaScript для першого проєкту",
    content: "Кодування",
    author: "Поліна",
    category: "Технології",
  },
  {
    id: 5,
    title: "Що слухати, коли пишеш код",
    content: "Музика",
    author: "Іван",
    category: "Музика",
  }
];
