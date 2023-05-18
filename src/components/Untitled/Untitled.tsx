import { Data } from '../../types/interfaces';
import Node from '../Node/Node';
import WorkspaceNav from '../WorkspaceNav/WorkspaceNav';
import Zoom from '../Zoom/Zoom';
import CenterBtn from '../buttons/CenterBtn/CenterBtn';
import styles from './Untitled.module.css';
import React, { useState } from 'react';

let nodeId = 0;

const Untitled = () => {
    const title = "Services";
    const count = 0;

    const [data, setData] = useState<Data>({
        id: 0,
        label: "Categories",
        level: 0,
        successor: []
    });
    const [currentZoom, setCurrentZoom] = useState<number>(100);
    const [locTop, setLocTop] = useState<number>(50);
    const [locLeft, setLocLeft] = useState<number>(50);
    const [translateX, setTranslateX] = useState<number>(-50);
    const [translateY, setTranslateY] = useState<number>(-50);


    const addUtil = (dt: Data, id: number): Data => {
        if (dt.id === id) {
            nodeId = nodeId + 1;
            const newId = nodeId;
            return { ...dt, successor: dt.successor.concat({ id: newId, label: "", level: data.level + 1, successor: [] }) };
        }
        return { ...dt, successor: dt.successor.map((n: Data) => addUtil(n, id)) };
    };

    const addData = (id: number) => {
        setData(addUtil(data, id));
    };

    const removeUtil = (dt: Data, id: number): Data => {
        if (dt.successor.map(d => d.id).includes(id)) {
            return {
                ...dt,
                successor: dt.successor.filter(s => s.id !== id)
            };
        }
        return { ...dt, successor: dt.successor.map((n: Data) => removeUtil(n, id)) };
    };

    const removeData = (id: number) => {
        setData(removeUtil(data, id));
    };

    const updateUtil = (dt: Data, id: number, newVal: string): Data => {
        if (dt.id === id) {
            return { ...dt, label: newVal };
        }
        return { ...dt, successor: dt.successor.map((n: Data) => updateUtil(n, id, newVal)) };
    };

    const updateData = (id: number, value: string) => {
        setData(updateUtil(data, id, value));
    };

    const handleListViewClick = () => {
        alert("Coming Soon!");
    };

    const centerWorksheet = () => {
        setLocLeft(50);
        setLocTop(50);
        setTranslateX(-50);
        setTranslateY(-50);
    };

    const updateZoom = (zoom: number) => {
        setCurrentZoom(zoom);
    };

    const handleWorkspaceNavigation = (dir: number) => {
        switch (dir) {
            case 0:
                setLocTop(locTop + 1);
                break;
            case 1:
                setLocLeft(locLeft - 1);
                break;
            case 2:
                setLocTop(locTop - 1);
                break;
            case 3:
                setLocLeft(locLeft + 1);
                break;
        }
    };

    const getHrLinkClass = (index: number, siblings: number) => {
        if (index === 0) {
            return styles.first_successor;
        } else if (index === siblings) {
            return styles.last_successor;
        }
    };

    const renderTree = (localData: Data, index: number, siblings: number) => {
        return (
            <div className={styles.subtree} key={`${localData.level}-${index}`}>
                {
                    (siblings && localData.level !== 0) ? (
                        <div className={`${styles.link_hr} ${getHrLinkClass(index, siblings)}`}></div>
                    ) : null
                }
                <Node
                    id={localData.id}
                    label={localData.label} level={localData.level} index={index}
                    successorLength={localData.successor.length} siblings={siblings}
                    onAdd={addData} onDel={removeData} onUpd={updateData}
                />
                <div className={styles.level}>
                    {
                        localData.successor.map((localData2: Data, index: number) => renderTree(localData2, index, localData.successor.length - 1))
                    }
                </div>
            </div>
        );
    };

    return (
        <div className={styles.main}>
            <section className={styles.top_bar}>
                <div className={styles.top_left}>
                    <h1 className={styles.title}>{title}</h1>
                    <span className={styles.count}>{count}</span>
                </div>
                <div className={styles.top_right}>
                    <button
                        className={styles.list_view} onClick={handleListViewClick}
                    >
                        List View
                    </button>
                    <CenterBtn onClick={centerWorksheet} />
                    <Zoom onZoomChange={updateZoom} />
                </div>
            </section>
            <section className={styles.workspace}>
                <WorkspaceNav onClick={handleWorkspaceNavigation} />
                <div
                    className={`${styles.worksheet}`} draggable
                    style={{ transformOrigin: 'center', scale: `${currentZoom}%`, top: `${locTop}%`, left: `${locLeft}%`, translate: `${translateX}% ${translateY}%` }}
                >
                    {renderTree(data, 0, data.successor.length - 1)}
                </div>
            </section>
        </div>
    );
};

export default Untitled;