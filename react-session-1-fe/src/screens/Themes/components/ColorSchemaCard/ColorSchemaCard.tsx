import * as S from "./ColorSchemeCard.style";

const ColorSchemeCard = ({
  id,
  primary,
  secondary,
  text,
  background,
  title,
}: Theme) => {
  return (
    <S.CardContainer role="card">
      <S.ColorsContainer>
        {
          // add colors here by map
        }
      </S.ColorsContainer>
      <S.CardFooter>
        <span>{title}</span>
        {/* <Link to={`/themes/${id}`}>
          <Button colorType="secondary">Open</Button>
        </Link> */}
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default ColorSchemeCard;
