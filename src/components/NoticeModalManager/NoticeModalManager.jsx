import { useDispatch, useSelector } from 'react-redux';
import ModalNotice from '../ModalNotice/ModalNotice';
import ModalAttention from '../ModalAttention/ModalAttention';
import { closeNoticeModal } from '../../redux/modal/modalSlice';
import { selectIsLoggedIn } from '../../redux/auth/authSelector';
import { selectNotices } from '../../redux/notices/noticesSelectors';

const NoticeModalManager = () => {
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();

  const { isOpen, notice } = useSelector(state => state.modal);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeNoticeModal());
  };
  
  return isLoggedIn ? (
    <ModalNotice notice={notice} notices={notices} onClose={handleClose} />
  ) : (
    <ModalAttention onClose={handleClose} />
  );
};

export default NoticeModalManager;
