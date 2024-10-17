import { useEffect, useRef } from 'react';
const CarrosselAnimado = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const speed = 1;
        const marqueeWidth = marquee.offsetWidth;
        const containerWidth = marquee.parentElement.offsetWidth;
        let pos = containerWidth;

        function animateMarquee() {
            pos -= speed;
            if (pos < -marqueeWidth) {
                pos = containerWidth;
            }
            marquee.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(animateMarquee);
        }

        animateMarquee();
    }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez após o componente ser montado.

    return (
        <div
            className="marquee-container"
            style={{
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                position: 'relative',
                height: '24px',
                backgroundColor: 'rgb(55 55 55 / 45%)',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                backdropFilter: 'blur(2px)',
            }}
        >
            <div
                className="marquee-text"
                id="marquee"
                ref={marqueeRef}
                style={{
                    display: 'inline-block',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    fontSize: '1.2rem',
                    fontWeight: '300',
                }}
            >
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS -
                MICROPIGMENTAÇÃO - BROW LAMINATION - LASH LIFTING - DESIGN DE SOBRANCELHAS
            </div>
        </div>
    );
};

export default CarrosselAnimado;
