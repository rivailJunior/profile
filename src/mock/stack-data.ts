import {
  AwsIcon,
  CssIcon,
  ExpojsIcon,
  ExpressjsIcon,
  FigmaIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  JsxIcon,
  NestjsIcon,
  NodejsIcon,
  PhpIcon,
  ReactjsIcon,
  TypescriptIcon,
} from "../assets/icons";

interface TSkills {
  name: string;
  value: number;
  years?: number;
  icon?: any;
}

const StacksExperienceData: TSkills[] = [
  {
    name: "javascript",
    value: 9,
    years: 9,
    icon: JavascriptIcon,
  },
  {
    name: "typescript",
    value: 8,
    years: 5,
    icon: TypescriptIcon,
  },
  {
    name: "react.js",
    value: 9,
    years: 7,
    icon: ReactjsIcon,
  },
  {
    name: "html",
    value: 9,
    years: 9,
    icon: HtmlIcon,
  },
  {
    name: "css",
    value: 7,
    years: 9,
    icon: CssIcon,
  },
  {
    name: "jsx",
    value: 8,
    years: 7,
    icon: JsxIcon,
  },
  {
    name: "react-native",
    value: 8,
    years: 4,
    icon: ReactjsIcon,
  },
  {
    name: "expo",
    value: 8,
    years: 2,
    icon: ExpojsIcon,
  },
  {
    name: "node.js",
    value: 7,
    years: 5,
    icon: NodejsIcon,
  },
  {
    name: "express.js",
    value: 7,
    years: 3,
    icon: ExpressjsIcon,
  },
  {
    name: "nest.js",
    value: 7,
    years: 2,
    icon: NestjsIcon,
  },
  {
    name: "php",
    value: 5,
    years: 4,
    icon: PhpIcon,
  },
  {
    name: "aws",
    value: 5,
    years: 2,
    icon: AwsIcon,
  },
  {
    name: "git",
    value: 9,
    years: 9,
    icon: GithubIcon,
  },

  {
    name: "figma",
    value: 7,
    years: 5,
    icon: FigmaIcon,
  },
];

interface IJobExperienceSkills {
  comapany: string;
  skills: string[];
}
const JobExperienceSkills: IJobExperienceSkills[] = [
  {
    comapany: "Addi",
    skills: [
      "React.js",
      "React Native",
      "React-Query",
      "Redux",
      "Javascript",
      "Typescript",
      "Html",
      "Css",
      "AWS",
      "Docker",
      "Git",
      "Figma",
      "Asana",
      "Jest",
      "Playwright",
      "React-Testing-Library",
      "CodePush",
      "NX",
      "Split.io",
      "Amplitude",
      "Sprig",
      "LogRocket",
      "LogDna",
    ],
  },
  {
    comapany: "Olist",
    skills: [
      "React.js",
      "Javascript",
      "Typescript",
      "Html",
      "Css",
      "Storybook",
      "Node.js",
      "Express.js",
      "Nest.js",
      "Swr",
      "AWS",
      "Docker",
      "Git",
      "Figma",
      "Jira",
      "Jest",
      "Cypress",
      "React-Testing-Library",
    ],
  },
  {
    comapany: "Tarkuss",
    skills: [
      "React.js",
      "React Native",
      "Expo",
      "Swr",
      "Redux",
      "Javascript",
      "Typescript",
      "Html",
      "Css",
      "Node.js",
      "Express.js",
      "Docker",
      "Git",
      "Figma",
      "Jira",
      "Cypress",
      "React-Testing-Library",
    ],
  },
  {
    comapany: "Itriad",
    skills: [
      "React.js",
      "Redux",
      "Javascript",
      "Typescript",
      "Html",
      "Css",
      "Git",
      "Figma",
      "Jira",
      "React-Testing-Library",
    ],
  },
  {
    comapany: "Axm & Transire",
    skills: [
      "Angular.js",
      "Javascript",
      "Jquery",
      "Html",
      "Css",
      "Git",
      "Figma",
      "Jira",
      "Node.js",
      "Express.js",
      "Postgres",
      "Loopback.io",
    ],
  },
  {
    comapany: "Nova Era",
    skills: [
      "Php",
      "Javascript",
      "Codeigniter",
      "Html",
      "Css",
      "Jquery",
      "Git",
      "Postgres",
    ],
  },
  {
    comapany: "Adpt Data",
    skills: [
      "Php",
      "Javascript",
      "Codeigniter",
      "Html",
      "Css",
      "Jquery",
      "Git",
      "Mysql",
    ],
  },
];

export { StacksExperienceData, JobExperienceSkills as JobExperienceSkillsData };
export type { TSkills };
