
const FooterComponent = () => {
    return (
        <footer style={{
            height: '80px', width: '100%', backgroundColor: 'var(--cinza-escuro)', justifyContent: 'center',
            alignItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--cinza)',
        }}>

            <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: '300', color: '#c2c2c2' }}>Studio Amanda Ferreira ® <br />Todos os direitos reservados© <br />CNPJ 50.775.784/0001-06</p>
            <p style={{
                textAlign: 'center', fontSize: '13px', fontWeight: '500',
                color: '#c2c2c2', paddingTop: '4px',
            }}><a style={{ outline: 'none', textDecoration: 'none', color: '#c2c2c2', fontWeight: '300' }} href="https://www.instagram.com/victorhhuggoo/">Desenvolvido por Victor Hugo🚀</a></p>
        </footer>
    );
}

export default FooterComponent;
