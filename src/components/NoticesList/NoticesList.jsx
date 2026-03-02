import css from './NoticesList.module.css';


const NoticesList = ({children, variant = 'default' }) => {
    return (<ul className={variant === 'favorites' ||  variant === 'viewed' ? css.tabList : css.list}>{children}</ul>);
};

export default NoticesList;