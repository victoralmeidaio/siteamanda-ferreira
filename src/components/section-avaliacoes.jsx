
import logoGoogle from '../assets/images/google.png?format=webp'
import logoCheck from '../assets/images/animationcheck.gif'
import { FaStar } from 'react-icons/fa';

const SectionAvaliacoes = () => {
    return (
        <section className="avaliacoes">
            <h1 style={{ paddingTop: '40px', paddingBottom: '40px', color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center' }}>Nossas avaliações</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }} className="content-avaliacoes">
                <img style={{ width: '150px' }} src={logoGoogle} alt="avaliações google " />
                <img style={{ width: '100px', marginTop: '-20px' }} src={logoCheck} alt="avaliações google " />
                <a style={{ textDecoration: 'none', color: 'var(--branco-gelo)',marginTop:'-20px' }} href="#">🏆✅Avaliações vereficadas</a>
                <div style={{ display: 'flex', gap: '10px' }} className="container-icons-stars">
                    <FaStar size={30} color='#FBBD01' />
                    <FaStar size={30} color='#FBBD01' />
                    <FaStar size={30} color='#FBBD01' />
                    <FaStar size={30} color='#FBBD01' />
                    <FaStar size={30} color='#FBBD01' />
                </div>
                <h6 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center' }}>Excelente</h6>
                <button className="btn-google"><a style={{ textDecoration: 'none', color: 'var(--cinza-escuro)' }} href="https://www.google.com/search?q=studio+amanda+ferreira&oq=studio+amanda+ferreira&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgoIBRAAGIAEGKIEMgYIBhBFGDwyBggHEEUYPDIGCAgQRRg80gEINzA3MGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer"  >Conferir Instagram</a></button>
            </div>

        </section>
    );
}

export default SectionAvaliacoes;
