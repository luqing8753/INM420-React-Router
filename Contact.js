import mobile from './../images/mobile.png';
import email from './../images/email.png';
import home from './../images/home.png';
import linkedin from './../images/linkedin.png';
import './../css/App.css';

export default function Contact() {
    return (
        <div className="App contact">
            <section className="App-body">

                <div className="contact-info">
                    <img src={mobile} className="icon" alt="mobile"/>
                    <p className="info">+1 (647) 819-8753</p>
                    <img src={email} className="icon" alt="email"/>
                    <p className="info">qinglu8753@gmail.com</p>
                    <img src={home} className="icon" alt="address"/>
                    <p className="info">845-830 Lawrence Avenue West, North York, Ontario, Canada</p>
                    <img src={linkedin} className="icon" alt="linkedin"/>
                    <a
                        className="App-link info"
                        href="https://www.linkedin.com/in/qing-lu-1023/"
                        target="_blank"
                        rel="noopener noreferrer">My LinkedIn Profile</a>
                </div>

            </section>
        </div>

    );
}
