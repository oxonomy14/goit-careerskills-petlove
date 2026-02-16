import css from './NewsItem.module.css';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formateDate';




const NewsItem = ({item}) => {

   const shortText =
    item.text?.length > 132
      ? item.text.slice(0, 132) + '...'
      : (item.text ?? 'No text provided');

  return (
   
     <li className={css.item}>
      <img className={css.image} src={item.imgUrl || null} alt={item.title} />
      <h3 className={css.title}>{item.title}</h3>
      <p className={css.text}>{shortText}</p>
      <div className={css.meta}>
        <time dateTime={item.date} className={css.dateTime}> {formatDate(item.date)}</time>
        <Link className={css.link} to={item.url} target='_blank' rel="noopener noreferrer">Read more</Link>
      </div>
     </li>
  
  );
};

export default NewsItem;
