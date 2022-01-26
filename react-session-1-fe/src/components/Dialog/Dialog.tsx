import Button from "../Button/Button";
import * as S from "./Dialog.style";

interface Props {
  isOpen: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const Dialog = ({ isOpen, onSubmit, onCancel }: Props) => {
  if (!isOpen) return null;

  return (
    <S.Dialog role="dialog">
      <S.DialogInnerContainer>
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <S.DialogButtonContainer>
          <Button onClick={onCancel} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit}>Submit</Button>
        </S.DialogButtonContainer>
      </S.DialogInnerContainer>
    </S.Dialog>
  );
};

export default Dialog;
