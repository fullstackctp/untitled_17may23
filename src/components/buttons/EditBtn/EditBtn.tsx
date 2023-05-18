import cStyles from '../btns.module.css';
import styles from './EditBtn.module.css';
import React from 'react';

const EditBtn = (props: any) => {
    const { onClick } = props;

    return (
        <button className={`${cStyles.btn} ${styles.btn}`}
            aria-label='Edit' title='Edit'
            onClick={onClick}
        >
            <svg className={`${cStyles.btn_icon} ${styles.btn_icon}`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path className={`${cStyles.icon_path} ${styles.icon_path}`} d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" />
            </svg>
        </button>
    );
};


export default EditBtn;