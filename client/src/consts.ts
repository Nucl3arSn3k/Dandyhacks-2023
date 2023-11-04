import { Quest } from "./types/questsTypes";

export enum StoneEnum {
  stone1 = "stone1",
  stone2 = "stone2",
  stone3 = "stone3",
  stone4 = "stone4",
  stone5 = "stone5",
  stone6 = "stone6",
  stone7 = "stone7",
}

export const IslandCoords = [
  { x: 400, y: 380 },
  { x: 660, y: 350 },
  { x: 700, y: 500 },
  { x: 1050, y: 450 },
  { x: 1110, y: 370 },
];

export const QUESTS: Record<string, Quest> = {
  quest_0: {
    id: 0,
    title: "Physics",
    percentageKnown: 30,
    conversation: [
      {
        msg: "Hello, I am your helpful tutor for today",
        from: "bot",
      },
      {
        msg: "Here are you 10 questions for physics. These are the 10 questions.",
        from: "bot",
      },
      {
        msg: "I think the answer do this mechanics question is that the change in energy in 5J",
        from: "user",
      },
    ],
    strengths: [
      {
        title: "Kinematics",
        percentageKnown: 10,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
      {
        title: "Kinematics",
        percentageKnown: 80,
      },
    ],
    weaknesses: [
      {
        title: "Kinematics",
        percentageKnown: 10,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
      {
        title: "Kinematics",
        percentageKnown: 80,
      },
    ],
  },
  quest_1: {
    id: 1,
    title: "Mathematics",
    percentageKnown: 30,
    strengths: [
      {
        title: "Calculus",
        percentageKnown: 20,
      },
      {
        title: "Algebra",
        percentageKnown: 40,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
    ],
    conversation: [],
    weaknesses: [
      {
        title: "Kinematics",
        percentageKnown: 10,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
      {
        title: "Kinematics",
        percentageKnown: 80,
      },
    ],
  },
  quest_2: {
    id: 2,
    title: "Chemistry",
    percentageKnown: 70,
    conversation: [],
    strengths: [
      {
        title: "Calculus",
        percentageKnown: 20,
      },
      {
        title: "Algebra",
        percentageKnown: 40,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
    ],
    weaknesses: [
      {
        title: "Kinematics",
        percentageKnown: 10,
      },
      {
        title: "Kinematics",
        percentageKnown: 50,
      },
      {
        title: "Kinematics",
        percentageKnown: 80,
      },
    ],
  },
};
