import styles from './WorkspaceNav.module.css';
import React from 'react';


const WorkspaceNav = (props: any) => {
    const { onClick } = props;

    const handleBtnClick = (dir: number) => {
        onClick(dir);
    };

    return (
        <>
            <button className={styles.workspace_nav_btn} onClick={() => handleBtnClick(0)}>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.20694 12.2676C3.92125 11.9677 3.93279 11.493 4.23271 11.2073L9.48318 6.20597C9.77285 5.93004 10.2281 5.93004 10.5178 6.20597L15.7682 11.2073C16.0681 11.493 16.0797 11.9677 15.794 12.2676C15.5083 12.5676 15.0336 12.5791 14.7336 12.2934L10.0005 7.78483L5.26729 12.2934C4.96737 12.5791 4.49264 12.5676 4.20694 12.2676Z" fill="#fff" />
                </svg>
            </button>
            <button className={styles.workspace_nav_btn} onClick={() => handleBtnClick(1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z" fill="#fff" />
                </svg>
            </button>
            <button className={styles.workspace_nav_btn} onClick={() => handleBtnClick(2)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#fff" />
                </svg>
            </button>
            <button className={styles.workspace_nav_btn} onClick={() => handleBtnClick(3)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#fff" />
                </svg>
            </button>
        </>
    );
};


export default WorkspaceNav;