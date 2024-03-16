export enum NavbarActionType {
  TOGGLE = "TOGGLE",
}

export type NavbarAction = {
  type: NavbarActionType;
};

export function navbarReducer(state: boolean, action: NavbarAction) {
  switch (action.type) {
    case NavbarActionType.TOGGLE:
      return !state;
    default:
      return state;
  }
}
