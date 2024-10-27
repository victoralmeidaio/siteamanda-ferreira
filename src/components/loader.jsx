import LogoAmanda from '../assets/images/amandalogobranco.png?format=webp';

const Loader = () => {
    const loaderStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--cinza-escuro)', // Cor de fundo
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Para garantir que o loader fique sobre tudo
    };

    const logoStyle = {
        width: '250px', // Tamanho do logo
        height: 'auto',
    };

    return (
        <div style={loaderStyle}>
            <img src={LogoAmanda} alt="Logo" style={logoStyle} />
        </div>
    );
};

export default Loader;
