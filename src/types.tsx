import { SVGProps } from "react";

export interface IFirstWrapper {}

export interface IFirstContainer {}

export interface IThirdContainer {}

export interface IFourthContainer {}

export interface IFifthContainer {}

export interface IGeneralWrapper {}

export interface IPictures {
  id: number;
  picture_url: string;
  title: string;
  subtitle: string;
  hyperlink: string;
  description: string;
}

export interface IMenu {
  id: number;
  title: string;
  scroll: string;
}

export interface ILogo {
  description: string;
  url: string;
}

export interface IHeader {
  menu: IMenu[];
  title: string;
  logo: ILogo;
}

export interface ISlogan {
  id: number;
  slogan: string;
}

export interface IContainer {
  "component-place": string;
  "component-type": string;
  title: string;
  subtitle: string;
  pictures: IPictures[];
  slogan: ISlogan[];
}

export interface IContent {
  landing: {
    header: IHeader;
    containers: IContainer[];
  };
}

export interface IHeaderProps extends IHeader {
  onclickFunction: CallableFunction;
}

export interface IProps {
  props: SVGProps<SVGElement>;
}

export interface IYildiz {
  margintop: number;
  marginright: number;
  size: number;
}


export interface RareItem {
  title: string;
  quantity: number;
  id: number;
  color: string;
}
export interface IRarity { 
  elements: RareItem[]
}