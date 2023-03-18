 
function Contact() {
    return (<div>
        <div className="form">
            <h1>Contact</h1>
        </div>
        <div className="contact">
        <div className="address">
            <h3>Address:</h3>
            <p className="text1">148 Portland Rd, Hucknall, Nottingham NG15 7SA</p>
            <h3>Telephone:</h3>
            <p><a className="phone" href="tel:+7867676767">+7867676767</a></p>
            <h3>Email:</h3>
            <p><a class="phone" href="mailto:ks04.08@mail.ru" target="_blank"> ks04.08@mail.ru </a></p>
            <h3>Whatsapp:</h3>
            <p><a className="phone" href="https://wa.me/7867676767" target="_blank">Whats app</a></p>
        </div>
        <div className="map">
        <h3>Map:</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19194.634062324236!2d-1.2314840208984372!3d53.03241960000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c001d513bd0f%3A0xb6370a482940a28c!2sAlison&#39;s%20Bakery!5e0!3m2!1sen!2suk!4v1678818413526!5m2!1sen!2suk" width="300" height="200" style={ {border: 0 } } allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </div>)
}
export default Contact