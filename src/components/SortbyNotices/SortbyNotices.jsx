import css from './SortbyNotices.module.css';

const SortbyNotices = ({ value, onChange }) => {


    return (<>
  
      
<form className={css.formWrapper}>
      <label className={`${css.item} ${value === 'popular' ? css.active : ''}`}>
        <input
          type="radio"
            value="popular"
            checked={value === 'popular'}
            onChange={e => onChange(e.target.value)}
        className={css.hiddenRadio}
  
        />
     Popular
          {value === 'popular' && (
      <button
        type="button"
        className={css.btnClear}
        onClick={e => {
          e.stopPropagation();  
          onChange('');
        }}
      >
               <svg  className={css.iconX}>
                 <use href="/icons/sprite.svg#icon-x" />
               </svg>
               </button>)}
      </label  >

          <label className={`${css.item} ${value === 'unpopular' ? css.active : ''}`}>
        <input
          type="radio"
          value="unpopular"
        checked={value === 'unpopular'}
            onChange={e => onChange(e.target.value)}
          className={css.hiddenRadio}
        />
       Unpopular
         {value === 'unpopular' && (
      <button
        type="button"
        className={css.btnClear}
        onClick={e => {
          e.stopPropagation();  
          onChange('');
        }}
      >
               <svg  className={css.iconX}>
                 <use href="/icons/sprite.svg#icon-x" />
               </svg>
               </button>)}
      </label>

      <label className={`${css.item} ${value === 'price_asc' ? css.active : ''}`}>
        <input
          type="radio"
          value="price_asc"
           checked={value === 'price_asc'}
            onChange={e => onChange(e.target.value)}
          className={css.hiddenRadio}
        />
        Cheap
          {value === 'price_asc' && (
      <button
        type="button"
        className={css.btnClear}
        onClick={e => {
          e.stopPropagation();  
          onChange('');
        }}
      >
               <svg  className={css.iconX}>
                 <use href="/icons/sprite.svg#icon-x" />
               </svg>
               </button>)}
      </label>

      <label className={`${css.item} ${value === 'price_desc' ? css.active : ''}`}>
        <input
          type="radio"
          value="price_desc"
           checked={value === 'price_desc'}
            onChange={e => onChange(e.target.value)}
          className={css.hiddenRadio}
        />
        Expensive
          {value === 'price_desc' && (
      <button
        type="button"
        className={css.btnClear}
        onClick={e => {
          e.stopPropagation();  
          onChange('');
        }}
      >
               <svg  className={css.iconX}>
                 <use href="/icons/sprite.svg#icon-x" />
               </svg>
               </button>)}
      </label>

      </form>
   
    
    
    
    
    </>);
};

export default SortbyNotices;