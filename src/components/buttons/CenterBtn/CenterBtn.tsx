import styles from './CenterBtn.module.css';
import React from 'react';


const CenterBtn = (props: any) => {
    const { onClick } = props;

    const handleClick = () => {
        onClick();
    };

    return (
        <button className={styles.btn} onClick={handleClick}
        aria-label='Center Worksheet' title='Center Worksheet'
        >
            <svg
                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 471 471"
                className={styles.btn_icon}
            >
                <path d="M317,471l-72-217H9L462,0L317,471z" className={styles.icon_path} />
            </svg>
        </button>
    );
};


export default CenterBtn;