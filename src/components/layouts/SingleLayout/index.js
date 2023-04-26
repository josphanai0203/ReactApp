import Header from '../DefaultLayout/Header';
function SingleLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default SingleLayout;
