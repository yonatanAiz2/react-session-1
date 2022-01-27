import Button from "../Button/Button";
import { analyticsService } from "../../utils/analytics.service";
import * as S from "./Dialog.style";

interface Props {
  isOpen: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const Dialog = ({ isOpen, onSubmit, onCancel }: Props) => {
  // Please use the analyticsService to log when the modal is opened and when its closed
  // Maybe also pass a prop from outside to specify the eventId
  return (
    <S.Dialog role="dialog">
      {/* Create here the dialog box, with Title (h2) message (p) and two buttons submit and cancel */}
    </S.Dialog>
  );
};

export default Dialog;
