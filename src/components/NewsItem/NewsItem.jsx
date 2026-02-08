import css from './NewsItem.module.css';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formateDate';




const NewsItem = ({item}) => {

  return (
   
     <li className={css.item}>
      <img className={css.image} src={item.imgUrl || null} alt={item.title} />
      <h3 className={css.title}>{item.title}</h3>
      <p className={css.text}>{item.text}</p>
      <div className={css.meta}>
        <time dateTime={item.date} className={css.dateTime}> {formatDate(item.date)}</time>
        <Link className={css.link} to={item.url} target='_blank'>Read more</Link>
      </div>
     </li>
  
  );
};

export default NewsItem;
