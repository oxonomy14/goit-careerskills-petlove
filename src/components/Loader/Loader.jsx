
import { PropagateLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = ({loading}) => {
  return (
    <div className={`${css.loaderBackdrop} ${loading ? css.active : ""}`}>
     
      <PropagateLoader  
      color="var(--secondary-color)"
        loading
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1" />
    </div>
  );
};

export default Loader;
