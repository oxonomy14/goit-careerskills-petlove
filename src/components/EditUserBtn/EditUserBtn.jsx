import css from './EditUserBtn.module.css';






const EditUserBtn = () => {


    return (
        <>
        <button className={css.editUserBtn} onClick={()=>alert("Button does not work yet")}>
              <svg className={css.editIcon}>
                      <use href={`/icons/sprite.svg?v=${Date.now()}#icon-edit`} />
                    </svg>
        </button>
        </>
    );
};

export default EditUserBtn;