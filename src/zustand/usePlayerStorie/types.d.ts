import { IButtonActions } from "components/refactor/Player/types";

export type IPlayerStorie = IAttributes & IMethods;

export type IActions = "pause" | "prev" | "next" | "info" | "like" | "shuffle";

export type IMethods = {
  handleCurrentAction: (action: IActions) => void;
};

export type IAttributes = {
  buttonActions: IButtonActions;
  currentAction: IActions | null;
};

export type IButtonActions = {
  [Key in IActions]: IButtonKey;
};

export type IButtonKey = {
  title: string;
  size: ISize;
  icon: any;
  action: IActions;
};
