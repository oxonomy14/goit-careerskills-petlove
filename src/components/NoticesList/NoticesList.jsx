import css from './NoticesList.module.css';


const NoticesList = ({children}) => {
    return (<ul className={css.list}>{children}</ul>);
};

export default NoticesList;