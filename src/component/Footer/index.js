import './Footer.css';

const Footer = () => {
    return (
        <section className="rodape">
            <div className="redes-sociais">
                <img src="/images/fb.png" alt="Facebbok"/>
                <img src="/images/ig.png" alt="Instgram"/>
                <img src="/images/tw.png" alt="Twitter"/>
            </div>
            <div className="logo">
            <img src="/images/logo.png" alt="Nossa Escola"/>
            </div>
        </section>
    );
}

export default Footer;