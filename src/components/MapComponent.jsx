
const MapComponent = () => {
    return (
        <div style={{ padding: '10px', width: '100%', height: '250px', margin: '0 auto'}}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.011058975715!2d-46.7005752238554!3d-23.46006557886966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9fe4b717a79%3A0x6eeb62e5b9970268!2sAmanda%20Ferreira%20Studio%20%7C%20Micropigmenta%C3%A7%C3%A3o%20%7C%20Design%20de%20sobrancelhas%20%7C%20Brown%20Lamination%20%7C%20C%C3%ADlios%20%7C%20Henna%20%7C%20Lash%20Lifting!5e0!3m2!1spt-BR!2sbr!4v1729036174204!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: '0', borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapComponent;
