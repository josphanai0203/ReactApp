import clsx from 'clsx';
import styles from './SideBar.module.scss';
function SideBar() {
    return (
        <aside className={styles.wrapper}>
            <div className={styles.container}>SideBar</div>
        </aside>
    );
}

export default SideBar;
