import Button from "../../../../components/Button/Button";
import { colorsArr } from "../../../../utils/colors.constants";
import * as S from "./ColorSchemeCard.style";

const ColorSchemeCard = ({ id, title, ...colors }: Theme) => {
  return (
    <S.CardContainer role="card">
      <S.ColorsContainer>
        {colorsArr.map((color) => (
          <S.Color key={color} color={colors[color]} />
        ))}
      </S.ColorsContainer>
      <S.CardFooter>
        <span>{title}</span>
        <a href={`/themes/${id}`}>
          <Button colorType="secondary">Open</Button>
        </a>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default ColorSchemeCard;
