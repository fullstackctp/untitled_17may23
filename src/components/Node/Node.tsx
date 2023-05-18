import AddBtn from '../buttons/AddBtn/AddBtn';
import CheckBtn from '../buttons/CheckBtn/CheckBtn';
import DismissBtn from '../buttons/DismissBtn/DismissBtn';
import EditBtn from '../buttons/EditBtn/EditBtn';
import styles from './Node.module.css';
import React, { useEffect, useState } from 'react';


const Node = (props: any) => {
    const { id, label, level, successorLength, siblings, onAdd, onDel, onUpd } = props;
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editedValue, setEditedValue] = useState<string>(label);

    useEffect(() => {
        if (label === "") {
            setEditMode(true);
        }
    }, []);

    const handleUpdate = () => {
        setEditMode(!editMode);
        onUpd(id, editedValue);
    };

    const handleAdd = (type: number) => {
        onAdd(id);
    };

    const handleDelete = (state: string) => {
        if (editMode && label === "") {
            onDel(id);
        } else if (editMode) {
            setEditMode(false);
        } else {
            onDel(id);
        }
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleEditChange = (val: string) => {
        setEditedValue(val);
    };

    const getColorClass = () => {
        if (level % 2 === 0) {
            return styles.even_row;
        } else {
            return styles.odd_row;
        }
    };

    const renderBtns = () => {
        if (level === 0) {
            return <AddBtn onClick={handleAdd} />;
        }
        if (editMode) {
            return (
                <>
                    <DismissBtn state="dismiss" active={true} onClick={handleDelete} />
                    <CheckBtn active={true} onClick={handleUpdate} />
                </>
            );
        } else {
            return (
                <>
                    <AddBtn onClick={handleAdd} />
                    <EditBtn onClick={handleEdit} />
                    <DismissBtn state="delete" active={true} onClick={handleDelete} />
                </>
            );
        }
    };

    const renderMode = () => {
        return (
            editMode ? (
                <input type="text" className={styles.edit_input} value={editedValue} onChange={(e) => handleEditChange(e.target.value)} spellCheck={false} />
            ) : (
                <div className={`${styles.test_node} ${getColorClass()}`}
                    title={label}
                >
                    {label}
                </div>
            )
        )
    };

    return (
        <div
            className={`${styles.node} ${successorLength ? styles.align_center : ''} ${level === 0 ? styles.parent : ''}`}
        >
            <section className={styles.left_section}>
                {
                    (siblings !== 0 && level !== 0) ? <div className={styles.branch_link}></div> : null
                }
                {renderMode()}
                {
                    successorLength ? <div className={styles.branch_link}></div> : null
                }
            </section>
            <section className={styles.node_controls}>
                {renderBtns()}
            </section>
        </div>
    );
};


export default Node;