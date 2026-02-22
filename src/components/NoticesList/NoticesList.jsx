import css from './NoticesList.module.css';


const NoticesList = ({children, variant = 'default' }) => {
    return (<ul className={variant === 'favorites' ? css.favoritesList : css.list}>{children}</ul>);
};

export default NoticesList;