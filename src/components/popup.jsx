import { useState, useEffect } from 'react';
import logoamandabranco from '../assets/images/amandalogobranco.png';
import sino from '../assets/images/animationsino.gif';
import outubrorosa from '../assets/images/outubro-rosa-logo.png';




const PopupComponent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [slideOut, setSlideOut] = useState(false); // Controle de animação de saída
    

    useEffect(() => {
        // Exibe o pop-up após 4 segundos (3000 ms)
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 4000);

        // Limpa o timer ao desmontar o componente
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        // Primeiro, ativa a animação de slide-out
        setSlideOut(true);

        // Depois de 300ms (tempo da animação), fecha o popup completamente
        setTimeout(() => {
            setShowPopup(false);
            setSlideOut(false); // Reseta o estado de slideOut
        }, 300); // Deve coincidir com a duração da animação de saída
    };

    const handleClick = () => {
        window.open('https://wa.me/5511977502407?text=Olá%20gostaria%20de%20agendar%20um%20horário', '_blank', 'noopener,noreferrer');
    };

    return (

        
        <div>
            {/* Condicionalmente renderiza o pop-up */}
            {showPopup && (
                <div
                    style={{
                        ...popupStyle,
                        transform: slideOut ? 'translateY(100%)' : 'translateY(0)', // Efeito de deslizamento
                        transition: 'transform 0.3s ease-in-out', // Animação de deslizamento
                    }}
                >
                    <div style={popupContentStyle}>
                        <button onClick={closePopup} style={closeButtonStyle}>X</button>
                        <img style={{ width: '120px' }} src={logoamandabranco} alt="Logo Amanda Ferreira" />
                        <img style={{ width: '100px', marginTop: '-30px' }} src={sino} alt="animation sino amanda ferreira" />
                        <h2 style={{ paddingBottom: '10px' }}>Última Chamada! <br />Reajuste Chegando!</h2>
                        <p style={{ fontSize: '16px', fontWeight: '300', paddingBottom: '20px' }}>
                            Sim, você leu certo!<br />
                            A partir de <span style={{ color: 'var(--lilas-claro)', fontWeight: 'bold' }}>1º de novembro</span>,
                            os preços vão passar por um reajuste. Mas calma! Se você agendar até 31 de outubro, <br />garante o preço antigo!
                            Corra! As vagas estão voando! Não fique de fora dessa!
                        </p>
                        <button
                            onClick={handleClick}
                            style={{
                                width: '110%',
                                padding: '10px 20px',
                                fontSize: '16px',
                                backgroundColor: 'var(--lilas-claro)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                marginBottom: '70px',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--lilas)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--lilas-claro)'}
                        >
                            Quero Agendar agora
                        </button>
                        <img style={{ width: '60px', position: 'absolute', bottom: '10px', right: '10px' }} src={outubrorosa} alt="outubro rosa" />
                    </div>
                </div>
            )}
        </div>
    );
};

// Estilo para o pop-up
const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    transition: 'transform 0.3s ease-in-out', // Transição para o efeito de deslizamento
};

// Estilo para o conteúdo do pop-up
const popupContentStyle = {
    backgroundColor: 'rgb(29 29 29 / 77%)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    height: '90%',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
};

// Estilo para o botão de fechar
const closeButtonStyle = {
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    position: 'absolute',
    right: '10px',
    top: '0',
    backgroundColor: 'transparent',
    fontSize: '24px',
};








export default PopupComponent;
