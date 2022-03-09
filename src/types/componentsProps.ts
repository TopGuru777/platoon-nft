export interface ContainerProps {
  maxW?: number;
}

export interface ButtonProps {
  maxW?: number;
  label?: string;
  fColor?: string;
  bgColor?: string;
  width?: string;
  border?: string;
  onClick?: VoidFunction;
}

export interface FeaturedCardProps {
  svg?: any;
  title?: string;
  desc?: string;
}

export interface SalesCardProps {
  title?: string;
  bgColor?: string;
  fColor?: string;
  content?: any;
  desc?: string;
}
