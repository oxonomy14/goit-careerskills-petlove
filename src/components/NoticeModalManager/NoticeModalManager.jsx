import { useDispatch, useSelector } from 'react-redux';
import ModalNotice from '../ModalNotice/ModalNotice';
import ModalAttention from '../ModalAttention/ModalAttention';
import {
  closeNoticeModal,
  closeAttentionModal,
} from '../../redux/modal/modalSlice';
import { selectNotices } from '../../redux/notices/noticesSelectors';

const NoticeModalManager = () => {
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();

  const { isNoticeOpen, isAttentionOpen, notice } = useSelector(
    state => state.modal
  );

  return (
    <>
      {isNoticeOpen && (
        <ModalNotice
          notice={notice}
          notices={notices}
          onClose={() => dispatch(closeNoticeModal())}
        />
      )}

      {isAttentionOpen && (
        <ModalAttention
          onClose={() => dispatch(closeAttentionModal())}
        />
      )}
    </>
  );
};

export default NoticeModalManager;