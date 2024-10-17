import { useState, useRef } from 'react';
import browlamination from '../assets/images/brow-Lamination.jpg';
import fioaFioRealista from '../assets/images/Micropigmentacao-Fio-a-Fio-Realista.jpg';
import ombreShadow from '../assets/images/Micropigmentacao-shadow.jpg';
import designTintura from '../assets/images/design-com-tintura-2.jpg';
import designHenna from '../assets/images/Design-de-Sobrancelhas-com-Henna.jpg';
import designPersonalizado from '../assets/images/Design-de-Sobrancelhas-Personalizado.jpg';
import epilacaoBuco from '../assets/images/Epilacao-de-Buco-scaled.jpg';

const slidesData = [
    { id: 1, title: 'Brow Lamination', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Brow%20Lamination.', image: browlamination },
    { id: 2, title: 'Fio à Fio Realista Nanoblading', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20micropigmentação%20Fio%20à%20Fio%20Realista.', image: fioaFioRealista },
    { id: 3, title: 'Efeito Ombrê Shadow', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20micropigmentação%20Shadow.', image: ombreShadow },
    { id: 4, title: 'Design com Tintura', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20com%20Tintura.', image: designTintura },
    { id: 5, title: 'Design com Henna', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20com%20Henna.', image: designHenna },
    { id: 6, title: 'Design Personalizado', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20Personalizado.', image: designPersonalizado },
    { id: 7, title: 'Epilação de Buço/Queixo', link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Epilação%20de%20Buço.', image: epilacaoBuco },
];


const SlideComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const startXRef = useRef(0);
    const currentTranslateRef = useRef(0);

    const handlePrevClick = () => {
        setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % slidesData.length);
    };

    const handleSlideClick = (link) => {
        window.open(link, '_blank');
    };

    // Funções de arrastar com mouse/dedo
    const handleStart = (e) => {
        const startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        startXRef.current = startX;
    };

    const handleMove = (e) => {
        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const deltaX = currentX - startXRef.current;
        currentTranslateRef.current = deltaX;
    };

    const handleEnd = () => {
        if (currentTranslateRef.current > 50) {
            handlePrevClick();
        } else if (currentTranslateRef.current < -50) {
            handleNextClick();
        }
        currentTranslateRef.current = 0;
    };

    return (
        <div
            className="slider-container"
            style={{
                width: '100%', position: 'relative',
                paddingLeft: '10px', paddingRight: '10px',
                paddingTop: '40px', overflow: 'hidden', margimTop: '10px',
            }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
        >
            <div
                className="slides"
                style={{

                    columnGap: '10px',
                    display: 'flex',
                    paddingTop: '15px',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * (100 / slidesData.length)}%)`,
                    width: `${slidesData.length * 50}%`, // Largura do contêiner flex com base no número de slides
                }}>

                {slidesData.map((slide) => (
                    <div
                        key={slide.id}
                        className="slide"
                        onClick={() => handleSlideClick(slide.link)}
                        style={{
                            width: '200px', // Mostrando dois slides por vez
                            padding: '5px',
                            boxSizing: 'border-box',
                            position: 'relative',
                            paddingTop: '50px',
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '200px', // Altura ajustável
                            borderRadius: '10px',
                            border: '1px solid var(--cinza-escuro)',

                        }}>
                        {/* Gradiente de fundo */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 1.9)15%, transparent)',
                                borderRadius: '10px'
                            }}
                        ></div>
                        {/* Título do slide */}
                        <div
                            className="slide-title"
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                color: 'white',
                                padding: '20px',
                                textAlign: 'center',
                                fontSize: '1.4rem',
                                fontWeight: '300',
                            }}
                        >
                            {slide.title}
                        </div>
                    </div>
                ))}
            </div>
            {/* Controles de navegação */}
            <div className="controls" style={{
                position: 'absolute', top: '30px', right: '10px', display: 'flex',
                gap: '10px', paddingBottom: '30px', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px',
            }}>
                <button
                    onClick={handlePrevClick}
                    style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '50%' }}
                >
                    ←
                </button>
                <button
                    onClick={handleNextClick}
                    style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '50%' }}
                >
                    →
                </button>
            </div>
        </div>
    );
};
export default SlideComponent;
