import Popup from '../../Popup/Popup';
import cStyles from '../btns.module.css';
import styles from './AddBtn.module.css';
import React, { useState } from 'react';


const AddBtn = (props: any) => {
    const { onClick } = props;
    const [popupState, setPopupState] = useState<boolean>(false);

    const handleBtnClick = (e: any) => {
        setPopupState(!popupState);
    };

    const handleNewAdd = (type: number) => {
        onClick(type);
        setPopupState(!popupState);
    };

    return (
        <>
            <button className={`${cStyles.btn} ${styles.btn}`}
                onClick={(e) => handleBtnClick(e)}
                aria-label='Add Sub-Category' title='Add Sub-Category'
            >
                <svg className={`${cStyles.btn_icon} ${styles.btn_icon}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path className={`${cStyles.icon_path} ${styles.icon_path}`} fillRule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M13,11 L13,7 C13,6.44771525 12.5522847,6 12,6 C11.4477153,6 11,6.44771525 11,7 L11,11 L7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 L11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 L17,13 C17.5522847,13 18,12.5522847 18,12 C18,11.4477153 17.5522847,11 17,11 L13,11 Z" />
                </svg>
            </button>
            {
                popupState ? <Popup onSelect={handleNewAdd} onClose={() => setPopupState(!popupState)} /> : null
            }
        </>
    );
};


export default AddBtn;