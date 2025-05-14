function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="footer-links">
                    {props.links.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;



