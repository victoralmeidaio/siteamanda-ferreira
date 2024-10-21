import Slider from "react-slick";
import { LuChevronsDown } from "react-icons/lu";


const slidesDataDepoimentos = [
    {
        id: 1,
        title: 'Rebekaa Cavalcanti',
        description: 'Amo o atendimento e o trabalho da Amanda, sempre impecável no que faz! Fora que ela é super carismática e o Studio dela é super aconchegante!!.',
    },
    {
        id: 2,
        title: 'Victoria Evelyn',
        description: 'Muito boa me trata super bem atende muito bem além de atender intende nossos problema não é só um atendimento rápido é uma experiência boa que as vezes agente nem precisa fzr a sombrancelha mais agente marca só pela recepção boa que ela trás pra nós muito conforto amo muito ela.',
    },
    {
        id: 3,
        title: 'karen severo de melo',
        description: 'Excelente profissional, fiz diversos procedimentos com ela e em todos eu saí super satisfeita, fora que a Amanda é um amor de pessoa, super atenciosa, dedicada e delicada, sempre procura o melhor para suas clientes... Eu super indico o Studio da Amanda.',
    },
    {
        id: 4,
        title: 'Regiani Da Rocha Santos',
        description: 'Uma excelente profissional, dedicada da o seu máximo para que a pessoa saia feliz do espaço dela, se tivesse nota mil eu daria sem sobra de dúvidas , indico e recomendo é a melhor ❤️.',
    },
    {
        id: 5,
        title: 'Larissa Sousa Silva (Lary)',
        description: 'Sempre atenciosa, educada e simpática e com certeza uma excelente profissional, além dos valores justos!.',
    },
    {
        id: 6,
        title: 'Gabrielle Pego',
        description: 'Amanda sempre maravilhosa, trabalha super bem, única pessoa que fez meu designer do jeitinho que eu gosto, sem tirar a armonia do meu rosto, muito obrigada! Você é uma excelente profissional..',
    },
    {
        id: 7,
        title: 'Ana carina Rodrigues da Silva',
        description: 'Foi de mais ❤️ super indico uma pessoa maravilhosa e um atendimento ótimo 🙏🏻',
    },
    {
        id: 8,
        title: 'Alexandra de lima silva Lima',
        description: 'O trabalho da Amanda é excelente , super recomendo',
    },
];



const SlideDepoimentos = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
                {slidesDataDepoimentos.map((dataD) => (
                    <div key={dataD.id} style={{
                    }} className="slide-balloon">
                        <div style={{
                            backgroundColor: '#242424',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            padding: '20px',
                        }} className="card-slide">
                            <p style={{ color: 'var(--branco-gelo)', fontSize: '14px', lineHeight: '1.5', fontStyle: 'italic' }} >{dataD.description}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <  LuChevronsDown style={{ color: 'var(--branco-gelo)', fontSize: '20px' }} />
                            <h3 style={{ color: 'var(--branco-gelo)', textAlign: 'center', fontSize: '14px', fontWeight: '600' }} >{dataD.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideDepoimentos;
