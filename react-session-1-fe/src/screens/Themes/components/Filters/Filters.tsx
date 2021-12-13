import { useEffect, useReducer } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ReactSwitch from "react-switch";
import { SearchInput } from "../../../../components/Input/Input";
import * as S from "./Filters.style";
import { FiltersState, Actions } from "./Filters.types";

const initialState: FiltersState = {
  search: "",
  mode: "light",
};

const reducer = (state: FiltersState, action: Actions): FiltersState => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, search: action.payload };

    case "UPDATE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

interface Props {
  onFiltersChange: (state: FiltersState) => void;
}

const Filters = ({ onFiltersChange }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_SEARCH", payload: e.target.value });
  };

  const handleModeChange = () => {
    dispatch({
      type: "UPDATE_MODE",
      payload: state.mode === "light" ? "dark" : "light",
    });
  };

  useEffect(() => {
    onFiltersChange(state);
  }, [state]);

  return (
    <S.InputContainer>
      <SearchInput
        placeholder="search for theme"
        value={state.search}
        onChange={handleSearchChange}
      />
      <ReactSwitch
        checked={state.mode === "light"}
        onChange={handleModeChange}
        uncheckedIcon={
          <S.IconContainer>
            <FaMoon />
          </S.IconContainer>
        }
        checkedIcon={
          <S.IconContainer>
            <FaSun />
          </S.IconContainer>
        }
      />
    </S.InputContainer>
  );
};

export default Filters;
