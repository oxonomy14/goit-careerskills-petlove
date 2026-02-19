import css from './NoticesItem.module.css';


const NoticesItem = ({ notice, onOpen }) => {

  return (
    
    <li className={css.item}>
      <img className={css.image} src={notice.imgURL} alt={notice.title} />
      <div className={css.titleRow}>
        <h3> {notice.title}</h3>

        <div className={css.reviews}>
          <svg width={16} height={16} className={css.iconStar}>
            <use href={`/icons/sprite.svg?v=${Date.now()}#icon-star`} />
          </svg>
          <span className={css.popularity}>{notice.popularity}</span>
        </div>
      </div>
      <ul className={css.categoryList}>
        <li>
          <h4 className={css.category}>Name</h4>
          <p className={css.categoryInfo}>{notice.name}</p>
        </li>
        <li>
          {' '}
          <h4 className={css.category}>Birthday</h4>
          <p className={css.categoryInfo}>
           {
  notice.birthday
    ? new Date(notice.birthday).toLocaleDateString('uk-UA')
    : ''
}
          </p>
        </li>
        <li>
          {' '}
          <h4 className={css.category}>Sex</h4>
          <p className={css.categoryInfo}>{notice.sex}</p>
        </li>
        <li>
          {' '}
          <h4 className={css.category}>Species</h4>
          <p className={css.categoryInfo}>{notice.species}</p>
        </li>
        <li>
          {' '}
          <h4 className={css.category}>Category</h4>
          <p className={css.categoryInfo}>{notice.category}</p>
        </li>
      </ul>
      <p className={css.comment}>{notice.comment}</p>
      <p className={css.price}>${notice.price}</p>
      <div className={css.btnWrapper}>
        <button className={css.btnLearnMore} onClick={onOpen}>Learn more</button>
        <button className={css.btnIcon} onClick={()=>{alert('This function is not yet implemented');}}>
        <svg className={css.heartIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-heart`} />
        </svg>
        </button>
      </div>
    </li>
     
     
  );
};

export default NoticesItem;
