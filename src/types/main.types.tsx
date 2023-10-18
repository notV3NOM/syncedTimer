export type ActivityMode = "TEXT" | "TEXT_WITH_IMAGE";

export type ActivityAction = {
  buttonText?: string;
  buttonIcon?: string;
  buttonAction: Function;
};

export type ActivityContent = {
  text: string;
  image?: string;
  actions?: ActivityAction[];
};

export type CustomCardProps = {
  mode: ActivityMode;
  content: ActivityContent;
  color: string;
  duration: number;
};
