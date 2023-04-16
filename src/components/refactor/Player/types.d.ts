export type IButtonActions = {
  [Key in string]: {
    title: string;
    size: ISize;
    icon: any;
  };
};

export type ISize = "sm" | "md";
