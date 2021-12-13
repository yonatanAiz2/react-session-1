import { rootReducer } from "../store/reducer.root";

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}
