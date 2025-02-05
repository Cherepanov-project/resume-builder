import { T_BlockElement } from "@/types/landingBuilder";
import {
  IconLinesFirst,
  IconLinesSecond,
  IconLinesThird,
  IconLinesFourth,
  IconLinesFive,
  IconLinesSix,
  IconLinesSeven,
  IconLinesEight,
  IconLinesNine,
  IconLinesTen,
  IconLinesEleven,
  IconLinesTwelve,
} from "@/components/atoms/Icons/LetterCardIcons";

const LetterLinesList = [
  {
    name: "BlockLine",
    icon: <IconLinesFirst scale={1} />,
    blockWidth: ["100%"],
    id: 0,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesSecond scale={1} />,
    blockWidth: ["calc(25% - 8px)", "calc(75% - 8px)"],
    id: 1,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesThird scale={1} />,
    blockWidth: ["calc(33% - 8px)", "calc(67% - 8px)"],
    id: 2,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesFourth scale={1} />,
    blockWidth: ["calc(50% - 8px)", "calc(50% - 8px)"],
    id: 3,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesFive scale={1} />,
    blockWidth: ["calc(67% - 8px)", "calc(33% - 8px)"],
    id: 4,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesSix scale={1} />,
    blockWidth: ["calc(75% - 8px)", "calc(25% - 8px)"],
    id: 5,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesSeven scale={1} />,
    blockWidth: ["calc(33.4% - 8px)", "calc(33.4% - 8px)", "calc(33.4% - 8px)"],
    id: 6,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesEight scale={1} />,
    blockWidth: ["calc(25% - 8px)", "calc(25% - 8px)", "calc(50% - 8px)"],
    id: 7,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesNine scale={1} />,
    blockWidth: ["calc(25% - 8px)", "calc(50% - 8px)", "calc(25% - 8px)"],
    id: 8,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesTen scale={1} />,
    blockWidth: ["calc(50% - 8px)", "calc(25% - 8px)", "calc(25% - 8px)"],
    id: 9,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesEleven scale={1} />,
    blockWidth: ["calc(25% - 8px)", "calc(25% - 8px)", "calc(25% - 8px)", "calc(25% - 8px)"],
    id: 10,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
  {
    name: "BlockLine",
    icon: <IconLinesTwelve scale={1} />,
    blockWidth: [
      "calc(16.666% - 8px)",
      "calc(16.666% - 8px)",
      "calc(16.666% - 8px)",
      "calc(16.666% - 8px)",
      "calc(16.666% - 8px)",
      "calc(16.666% - 8px)",
    ],
    id: 11,
    text: "Пример текста",
    children: [] as T_BlockElement[],
  },
];

export default LetterLinesList;
