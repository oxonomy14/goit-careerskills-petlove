
import { PropagateLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBackdrop}>
     
      <PropagateLoader  
      color="#f6b83d"
        loading
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1" />
    </div>
  );
};

export default Loader;
