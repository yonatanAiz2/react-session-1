import Loader from "react-loader-spinner";
import * as S from "./Spinner.style";

export const Spinner = () => {
  return (
    <S.SpinnerContainer data-testid="container--spinner">
      <Loader type="Grid" color="hotpink" height={100} width={100} />
    </S.SpinnerContainer>
  );
};
