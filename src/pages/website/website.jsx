import './website.css';
import { FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

import bannerAmanda from '../../assets/images/amandaferreirabanner.png?format=webp';
import fotostudio from '../../assets/images/fotosstudio.png?format=webp';
import SlideCardsWeb from '../../components/slideCardsWeb';
import bannerCurso from '../../assets/images/bannercurso.png?format=webp';
import mockupinstagram from '../../assets/images/instagram-amanda.png?format=webp';
import SectionAvaliacoes from '../../components/section-avaliacoes';
import SlideDepoimentos from '../../components/slideDepoimentos';
import MapComponent from '../../components/MapComponent';
import FooterComponent from '../../components/footerComponent';



const Website = () => {
    return (
        <div style={{
            maxWidth: '1400px', justifyContent: 'center', display: 'flex', flexDirection: 'column',
            margin: 'auto'
        }} className="containerPrincipal">
            <anside style={{ display: 'flex', }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="container-titles">
                    <h1 style={{ color: 'var(--branco-gelo)', fontSize: '5.4rem', fontWeight: '500' }}>Transforme Seu Olhar com Sobrancelhas Realistas e Naturais</h1>
                    <h2 style={{ color: 'var(--branco-gelo)', fontSize: '2.3rem', fontWeight: '300' }} >Beleza, Precisão e Sofisticação em Cada Detalhe</h2>
                    <div style={{ paddingTop: '10px', columnGap: '20px', display: 'flex' }} className="btns-calltoAction">
                        <button className="btn-calltoAction"><a href="https://online.maapp.com.br/AmandaferreiraStudio" target='_blank' >Agendar online </a></button>
                        <button className="btn-calltoAction"><a href="https://wa.me/5511977502407?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target='_blank' rel='nooperner noreferrer'>Agendar pelo Whatsapp</a></button>
                    </div>
                </div>
                <img style={{ width: '35%' }} src={bannerAmanda} alt="Amanda Ferreira" />
            </anside>
            <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center,', alignItems: 'center', }} className='section-studio'>
                <h1 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center' }}>Conheça nosso studio</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'var(--graffiti)', borderRadius: '10px', padding: '1rem', marginTop: '4rem' }} className="container-nosso-studio">
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center', backgroundColor: 'var(--graffiti-escuro)', borderRadius: '10px', padding: '0  4rem'
                    }} className="content-nosso-studio">
                        <h5 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '300', textAlign: 'center' }}>Um Espaço Criado para Valorizar<br /> Seu Estilo e Sua Beleza</h5>
                        <p style={{ color: 'var(--branco-gelo)', fontSize: '1.8rem', fontWeight: '300' }} >Conheça nosso espaço e nossos procedimentos</p>
                        <div style={{ paddingTop: '15px', columnGap: '20px', display: 'flex', }} className="btns-calltoAction">
                            <button className="btn-calltoAction"><a href="https://wa.me/5511977502407?send" target='_blank' rel='nooperner noreferrer'>Quero tirar Dúvidas</a></button>
                        </div>

                    </div>
                    <img style={{ width: '30%' }} src={fotostudio} alt="Conheça nosso studio" />
                </div>
            </section>
            <section className='section-procedimentos'>
                <h1 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center', paddingTop: '40px', paddingBottom: '10px' }}>Conheça os procedimentos favoritos
                </h1>
                <SlideCardsWeb />
            </section>
            <section className="cursos-treinamentos">
                <h1 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center', paddingTop: '40px', paddingBottom: '10px' }}>Cursos e treinamentos
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', }} className="container-cards-cursos">
                    <div style={{
                        backgroundImage: `url(${bannerCurso})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'aqua',
                        width: '50%',
                        height: '150px',
                        borderRadius: '10px',
                        padding: '10px',
                        borderder: '2px solid var(--branco-gelo)',
                        gap: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'

                    }} className="cards-cursos">
                        <h5 style={{ fontSize: '3rem', fontWeight: '400', color: 'var(--branco-gelo)' }} >Curso Design de Sobrancelhas
                        </h5>
                        <p style={{ fontSize: '1.6rem', fontWeight: '400', color: 'var(--branco-gelo)' }} >Do nível iniciante ao avançado
                        </p>
                        <a style={{outline:'none', textDecoration:'none'}} href="https://drive.google.com/file/d/1MYH8-gOjAiSl150YqD2cFMpiNgVHZwDW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className='btn-calltoAction'>Quero saber mais sobre o curso</button>
                        </a>

                    </div>
                </div>
            </section>
            <section className="acompanhe-instagram" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center,', alignItems: 'center', }}>
                <h1 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center', paddingTop: '40px', }}>Acompanhe nosso instagram</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'var(--graffiti)', borderRadius: '10px', padding: '1rem', marginTop: '4rem', minHeight: '450px' }} className="container-nosso-instagram">
                    <img style={{ width: '18%' }} src={mockupinstagram} alt="Conheça nosso studio" />
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center', backgroundColor: 'var(--graffiti-escuro)', borderRadius: '10px', padding: '0  4rem'
                    }} className="content-nosso-instagram">
                        <h5 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '300', textAlign: 'center' }}>Siga-nos no Instagram e Descubra Benefícios<br /> Exclusivos para Você</h5>
                        <p style={{ color: 'var(--branco-gelo)', fontSize: '1.8rem', fontWeight: '300' }} >Conheça nosso espaço e nossos procedimentos</p>
                        <div style={{ paddingTop: '15px', columnGap: '20px', display: 'flex', }} className="btns-calltoAction">
                            <button style={{ fontSize: '17px' }} className="btn-instagram"><a style={{ fontSize: '17px' }} href="https://www.instagram.com/_amandafdesigner/" target='_blank' rel='noopener noreferrer'>Conferir Instagram</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <SectionAvaliacoes />
            <SlideDepoimentos />
            <section className="localizacao" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center,', alignItems: 'center', marginBottom: '50px' }}>
                <h1 style={{ color: 'var(--branco-gelo)', fontSize: '3.6rem', fontWeight: '400', textAlign: 'center', paddingTop: '40px', }}>Onde estamos localizado</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'var(--graffiti)', borderRadius: '10px', padding: '1rem', marginTop: '4rem', width: '100%' }} className="container-localization">
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        padding: '0  4rem', width: '100%', gap: '10px'
                    }} className="content-cards">

                        <div style={{ display: 'flex', backgroundColor: 'var(--graffiti-escuro)', padding: '20px', borderRadius: '20px', color: 'var(--branco-gelo)', gap: '20px', alignItems: 'center' }} className="container-cards-location">
                            <FaClock size={35} />
                            <div className="conteudo-location">
                                <h6 style={{ fontSize: '20px', fontWeight: 'bold' }} >Horário de atendimento</h6>
                                <p>Segunda à Sábados: 08:00 às 18:00.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', backgroundColor: 'var(--graffiti-escuro)', padding: '20px', borderRadius: '20px', color: 'var(--branco-gelo)', gap: '20px', alignItems: 'center' }} className="container-cards-location">
                            <FaWhatsapp size={35} />
                            <div className="conteudo-location">
                                <h6 style={{ fontSize: '20px', fontWeight: 'bold' }} >Contatos</h6>
                                <p>Whatsapp Studio (11)97750-2407</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', backgroundColor: 'var(--graffiti-escuro)', padding: '20px', borderRadius: '20px', color: 'var(--branco-gelo)', gap: '20px', alignItems: 'center' }} className="container-cards-location">
                            <FaMapMarkerAlt size={35} />
                            <div className="conteudo-location">
                                <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>Endereço</h6>
                                <p>Rua Benedito Edigio Barbosa número 41A <br /> Sala 03 - 2° andar - Vila teresinha - Brasilandia - CEP 02846200</p>
                            </div>
                        </div>

                    </div>
                    < MapComponent />
                </div>
            </section>
            <FooterComponent />

        </div>
    );
}

export default Website;



