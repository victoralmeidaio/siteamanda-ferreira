
import CarrosselAnimado from '../../components/carrossel-animado';
import './links.css';
import SlideComponent from '../../components/slide';
import CardsComponent from '../../components/cards';
import MapComponent from '../../components/MapComponent';
import SocialMediaLinks from '../../components/redes-sociais';
import PopupComponent from '../../components/popup';
import logoamandabranco from '../../assets/images/amandalogobranco.png?format=webp';

const Links = () => {
    return (
        <div className="container-links" >
            <div className='container-header'>
                <header style={{ paddingTop: '14px' }}>
                    <div style={{ padding: '5px', boxShadow: ' 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);' }} className="container-img-logo">
                        <img src={logoamandabranco} alt="Logo  Amanda Ferreira" />
                    </div>
                    <div style={{
                        paddingBottom: '10px', paddingTop: '5px', alignItems: 'center,', justifyContent: 'center',
                        display: 'flex', flexDirection: 'column', alignContent: 'center', textAlign: 'center'
                    }} >
                        <h1 style={{
                            fontSize: '22px', fontWeight: '400',
                            fontStyle: 'italic'
                        }}>Amanda Ferreira</h1>
                        <h2 style={{ fontSize: '16px', fontWeight: '300' }}>Micropigmentadora</h2>
                    </div>
                    <SocialMediaLinks />

                </header>
            </div>
            <CarrosselAnimado />
            <h3 style={{
                alignSelf: 'flex-start', paddingLeft: '20px', marginBottom: '-40px',
                paddingTop: '20px', fontSize: '18px', fontWeight: '300'
            }} >Nossos Serviços</h3>
            <SlideComponent />
            <CardsComponent />
            <h3 style={{
                alignSelf: 'center', paddingLeft: '20px',
                paddingTop: '20px', fontSize: '18px', fontWeight: '300'
            }} >Nossa Localização</h3>
            <MapComponent />
            <PopupComponent />
            <footer style={{
                height: '80px', width: '100%', backgroundColor: 'var(--cinza-escuro)', justifyContent: 'center',
                alignItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column',borderTop: '1px solid var(--cinza)',
            }}>

                <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: '300', color: '#c2c2c2' }}>Studio Amanda Ferreira ® <br/>Todos os direitos reservados© <br/>CNPJ 50.775.784/0001-06</p>
                <p style={{
                    textAlign: 'center', fontSize: '13px', fontWeight: '500',
                    color: '#c2c2c2', paddingTop: '4px',
                }}><a style={{ outline: 'none', textDecoration: 'none', color: '#c2c2c2',fontWeight:'300' }} href="https://www.instagram.com/victorhhuggoo/">Desenvolvido por Victor Hugo🚀</a></p>
            </footer>
        </div>
    );
}; export default Links;


