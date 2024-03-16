export enum SwitchThemeActionType {
  CHANGE = "CHANGE",
  SET_THEME = "SET_THEME",
}

type SwitchThemeAction =
  | {
      type: SwitchThemeActionType.CHANGE;
    }
  | {
      type: SwitchThemeActionType.SET_THEME;
      payload: ThemeState;
    };

export type ThemeState = "dark" | "light" | "system";

export function changeThemeReducer(state: ThemeState, action: SwitchThemeAction) {
  switch (action.type) {
    case SwitchThemeActionType.CHANGE:
      if (state === "system") return "dark";
      else if (state === "dark") return "light";
      //  else if (state === "light") return "system";
      else if (state === "light") return "dark";
      return state;

    case SwitchThemeActionType.SET_THEME:
      return action.payload;

    default:
      return state;
  }
}
