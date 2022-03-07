export interface ContainerProps {
  maxW?: number;
}

export interface ButtonProps {
  maxW?: number;
  label?: string;
  fColor?: string;
  bgColor?: string;
  onClick?: VoidFunction;
}

export interface FeaturedCardProps {
  svg?: any;
  title?: string;
  desc?: string;
}
