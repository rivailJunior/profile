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
export { StacksExperienceData };
export type { TSkills };
