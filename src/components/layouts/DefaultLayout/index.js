import clsx from 'clsx';
import Header from './Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header></Header>
            <div className={styles.container}>
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
