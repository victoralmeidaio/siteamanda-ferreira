import { FaCalendarAlt, FaGraduationCap, } from 'react-icons/fa'; // Ícones do react-icons

const cardsData = [
    {
        id: 1,
        title: 'Agendar um Horário',
        icon: <FaCalendarAlt size={24} color='#1d1d1d' />, // Ícone de agenda
        link: 'https://chat.fillapp.me/?id=82ad5be0-f8b7-488d-847d-72a91c0756ed',
    },
    {
        id: 2,
        title: 'Treinamento Design de Sobrancelhas',
        icon: <FaGraduationCap size={24} color='#1d1d1d' />, // Ícone de graduação
        link: 'https://amandaferreirastudio.com.br/curso-design-de-sobrancelhas/',
    },
    
];

const CardsComponent = () => {
    return (
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            {cardsData.map((card) => (
                <div
                    key={card.id}
                    className="card"
                    style={{
                        backgroundColor: '#000',
                        width: '100%', // Largura total do container
                        height: '70px', // Altura fixa de 100px
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '20px',
                        justifyContent: 'center',
                        color: 'white',
                        position: 'relative',
                        padding: '0px',
                        border: '1px solid var(--cinza)',
                    }}
                >
                    
                        <div style={{
                            position: 'absolute', right: '0px', top: '0px', padding: '4px',
                            backgroundColor: '#fff', borderRadius: ' 0 20px'
                        }} >{card.icon}</div>
                        <a
                            href={card.link}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: '300',
                                textAlign: 'center',
                                width: '100%',
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {card.title}
                        </a>
                    </div>
                
            ))}
        </div>
    );
};

export default CardsComponent;
