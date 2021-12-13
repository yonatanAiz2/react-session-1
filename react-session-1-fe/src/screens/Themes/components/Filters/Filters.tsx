import { useEffect, useReducer } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ReactSwitch from "react-switch";
import { SearchInput } from "../../../../components/Input/Input";
import * as S from "./Filters.style";
import { Actions } from "./Filters.types";

type ModeType = "light" | "dark";

export interface FiltersState {
  search: string;
  mode: ModeType;
}

const initialState: FiltersState = {
  search: "",
  mode: "light",
};

const reducer = (state: FiltersState, action: any) => {
  return state;
};

interface Props {
  onFiltersChange: (state: FiltersState) => void;
}

const Filters = ({ onFiltersChange }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleModeChange = () => {};

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
