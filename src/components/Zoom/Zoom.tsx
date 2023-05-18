import styles from './Zoom.module.css';
import React, { useState } from 'react';

const Zoom = (props: any) => {
    const { onZoomChange } = props;

    const [disableZoomIn, setDisableZoomIn] = useState<boolean>(false);
    const [disableZoomOut, setDisableZoomOut] = useState<boolean>(false);
    const [dropdown, setDropDown] = useState<boolean>(false);
    const [selectedZoom, setSelectedZoom] = useState<number>(8);
    const zoomStops = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];
    const zoomUnit = "%";

    const closeDropdown = () => {
        setDropDown(false);
    };

    const openDropdown = () => {
        setDropDown(true);
    };

    const toggleDropdown = () => {
        setDropDown(!dropdown);
    };

    const updateZoom = (index: number) => {
        setSelectedZoom(index);
        onZoomChange(zoomStops[index]);
        closeDropdown();
    };

    const zoomIn = () => {
        if (selectedZoom === zoomStops.length - 1) {
            setDisableZoomIn(true);
        } else {
            updateZoom(selectedZoom + 1);
            setDisableZoomIn(false);
            setDisableZoomOut(false);
        }
    };

    const zoomOut = () => {
        if (selectedZoom === 0) {
            setDisableZoomOut(true);
        } else {
            updateZoom(selectedZoom - 1);
            setDisableZoomOut(false);
            setDisableZoomIn(false);
        }
    };

    const renderDropdown = () => {
        return (
            <ul className={`${styles.dropdown} ${dropdown ? styles.open_dropdown : ''}`}>
                {
                    zoomStops.map((zoom: number, index: number) => (
                        <li key={zoom} className={styles.dropdown_item}>
                            <label htmlFor={`zoom-${zoom}`} className={styles.zoom_item}>
                                <span>{zoom}{zoomUnit}</span>
                                <input
                                    type="radio" name='zoom' id={`zoom-${zoom}`} className={styles.zoom_radio_input}
                                    checked={zoomStops[selectedZoom] === zoom} onChange={() => updateZoom(index)}
                                />
                            </label>
                        </li>
                    ))
                }
            </ul>
        );
    };

    return (
        <div className={styles.container}>
            <button type='button' className={`${styles.btn} ${styles.dec_btn} ${disableZoomOut ? styles.disabled : ''}`}
                onClick={zoomOut}
            >
                -
            </button>
            <section className={styles.wrapper} onMouseOver={openDropdown} onMouseOut={closeDropdown}>
                <div className={styles.current_zoom} onClick={toggleDropdown}>{zoomStops[selectedZoom]}{zoomUnit}</div>
                {renderDropdown()}
            </section>
            <button type='button' className={`${styles.btn} ${styles.inc_btn} ${disableZoomIn ? styles.disabled : ''}`}
                onClick={zoomIn}
            >
                +
            </button>
        </div>
    );
};


export default Zoom;