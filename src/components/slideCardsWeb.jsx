import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import browlamination from '../assets/images/brow-Lamination.jpg?format=webp';
import fioaFioRealista from '../assets/images/Micropigmentacao-Fio-a-Fio-Realista.jpg?format=webp';
import ombreShadow from '../assets/images/Micropigmentacao-shadow.jpg?format=webp';
import designTintura from '../assets/images/designcomtintura.jpg?format=webp';
import designHenna from '../assets/images/Design-de-Sobrancelhas-com-Henna.jpg?format=webp';
import designPersonalizado from '../assets/images/Design-de-Sobrancelhas-Personalizado.jpg?format=webp';
import epilacaoBuco from '../assets/images/Epilacao-de-Buco-scaled.jpg?format=webp';
import Slider from "react-slick";

const slidesData = [
    {
        id: 1,
        title: 'Brow Lamination',
        description: 'Alinhe e discipline suas sobrancelhas com o efeito natural e duradouro do Brow Lamination.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Brow%20Lamination.',
        image: browlamination,
    },
    {
        id: 2,
        title: 'Fio à Fio Realista Nanoblading',
        description: 'Tenha sobrancelhas naturais com o efeito Fio à Fio Realista e tecnologia Nanoblading.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20micropigmentação%20Fio%20à%20Fio%20Realista.',
        image: fioaFioRealista,
    },
    {
        id: 3,
        title: 'Efeito Ombrê Shadow',
        description: 'Um degradê perfeito que traz suavidade e definição às suas sobrancelhas.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20micropigmentação%20Shadow.',
        image: ombreShadow,
    },
    {
        id: 4,
        title: 'Design com Tintura',
        description: 'Defina o formato perfeito das suas sobrancelhas com a tintura que realça o olhar.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20com%20Tintura.',
        image: designTintura,
    },
    {
        id: 5,
        title: 'Design com Henna',
        description: 'Valorize suas sobrancelhas com a henna, oferecendo cor e forma natural por mais tempo.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20com%20Henna.',
        image: designHenna,
    },
    {
        id: 6,
        title: 'Design Personalizado',
        description: 'Design exclusivo para realçar sua beleza, com técnicas que respeitam a simetria do seu rosto.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Design%20Personalizado.',
        image: designPersonalizado,
    },
    {
        id: 7,
        title: 'Epilação de Buço/Queixo',
        description: 'Remova os pelos indesejados de maneira delicada e eficaz com nossa epilação de buço e queixo.',
        link: 'https://api.whatsapp.com/send?phone=5511977502407&text=Gostaria%20de%20agendar%20um%20horário%20para%20o%20procedimento%20de%20Epilação%20de%20Buço.',
        image: epilacaoBuco,
    },
];



const SlideCardsWeb = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
         
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            margin: 'auto ',
            width: '100%',


        }} className="container-slide">
            <Slider {...settings}>
                {slidesData.map((d) => (
                    <div key={d.id} style={{
                    }} className="slides">
                        <div style={{
                            backgroundImage: `url(${d.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '400px',
                            borderRadius: '10px',
                        }} className="card-slide">
                            <div style={{
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 30%, transparent)',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius: '10px',
                                padding: '10px',

                            }} className="content-card">
                                <h1>{d.title}</h1>
                                <p style={{padding:'0 2rem'}}>{d.description}</p>
                                <button style={{ marginTop: '10px', marginBottom: '10px', margin:'1rem 2rem' }}
                                    className="btn-calltoAction" onClick={() => window.open(d.link, '_blank')}>agendar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default SlideCardsWeb;


