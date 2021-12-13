type ModeType = "light" | "dark";

interface UpdateSearchAction {
  type: "UPDATE_SEARCH";
  payload: string;
}

interface UpdateModeAction {
  type: "UPDATE_MODE";
  payload: ModeType;
}

export type Actions = UpdateSearchAction | UpdateModeAction;

export interface FiltersState {
  search: string;
  mode: ModeType;
}
