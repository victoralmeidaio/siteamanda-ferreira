// Importando ícones das redes sociais da biblioteca react-icons
import { FaInstagram, FaWhatsapp,  FaGlobe } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

const SocialMediaLinks = () => {
    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center',paddingTop: '10px', paddingBottom: '10px' }}>
            {/* Instagram */}
            <a href="https://www.instagram.com/_amandafdesigner/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} style={{ color: '#ccc', padding: '5px', backgroundColor: 'var(--cinza-escuro)', borderRadius: '100%' }} />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/5511977502407" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} style={{ color: '#ccc', padding: '5px', backgroundColor: 'var(--cinza-escuro)', borderRadius: '100%' }} />
            </a>

            {/* Agendamento */}
            <a href="https://chat.fillapp.me/?id=82ad5be0-f8b7-488d-847d-72a91c0756ed" target="_blank" rel="noopener noreferrer">
                <MdEventAvailable size={40} style={{ color: '#ccc', padding: '5px', backgroundColor: 'var(--cinza-escuro)', borderRadius: '100%' }} />
            </a>

            {/* TikTok 
            <a href="https://www.tiktok.com/@seu_perfil" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={40} style={{ color: 'var(--cinza-claro)', padding: '5px', backgroundColor: '#fff', borderRadius: '100%' }} />
            </a>
            */}
             {/* Site (Globo Terrestre) */}
             <a href="https://amandaferreirastudio.com.br/" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={40} style={{ color: '#ccc', padding: '5px', backgroundColor: 'var(--cinza-escuro)', borderRadius: '100%' }} />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
