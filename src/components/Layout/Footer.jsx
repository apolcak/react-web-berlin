import './Footer.scss';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="container">
                <p className="app-footer__info">Web v Reactu, 2024</p>
                <small>
                    Projekt vytvořen pomocí nástroje create-react-app.
                </small>
            </div>
        </footer>
    );
};

export default Footer;
