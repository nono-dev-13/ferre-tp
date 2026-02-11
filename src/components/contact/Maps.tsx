function ContactMap() {
  return (
    <div className="w-full overflow-hidden shadow-md mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67322.2728077871!2d1.5297091959131337!3d48.45113686261163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4140ba2d1ce75%3A0x9b24e47c93c54bee!2sFerre%20TP%20P%C3%A8re%20et%20Fils!5e0!3m2!1sfr!2sfr!4v1770629788422!5m2!1sfr!2sfr"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactMap;
