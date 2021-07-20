import icon1 from './../images/icon_1.png';
import icon2 from './../images/icon_2.png';
import icon3 from './../images/icon_3.png';
import icon4 from './../images/icon_4.png';
import icon5 from './../images/icon_5.png';
import icon6 from './../images/icon_6.png';
import icon7 from './../images/icon_7.png';
import brandBook1 from './../images/BrandBook_1.png';
import brandBook2 from './../images/BrandBook_2.png';
import brandBook3 from './../images/BrandBook_3.png';
import brandBook4 from './../images/BrandBook_4.png';
import brandBook5 from './../images/BrandBook_5.png';
import './../css/App.css';

export default function Projects() {
    return (
        <div className="App projects">
            <section className="App-body">
                <div className="project-content">

                    <p className="project-title">Icon Art Work</p>
                    <p className="description">The characters which we have described is based on a
                        carton “One Piece”.The story follows the adventures of Monkey D. Luffy, a boy
                        whose body gained the properties of rubber after unintentionally eating a Devil
                        Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the
                        Grand Line in search of the world's ultimate treasure known as "One Piece" in
                        order to become the next King of the Pirates. Based on the original characters,
                        we create icons with our own style.</p>
                    <img src={icon1} className="art-icon" alt="icon"/>
                    <img src={icon2} className="art-icon" alt="icon"/>
                    <img src={icon3} className="art-icon" alt="icon"/>
                    <img src={icon4} className="art-icon" alt="icon"/>
                    <img src={icon5} className="art-icon" alt="icon"/>
                    <img src={icon6} className="art-icon" alt="icon"/>
                    <img src={icon7} className="art-icon" alt="icon"/>

                </div>
                <div className="project-content">

                    <p className="project-title">SPLASH Energy Drink Brand Book</p>

                    <p className="description">A new era bdgins. SPLASH energy drink, the wellknow
                        product with the one-of-a-kind taste now has an entirely new look. With these
                        guidelines we present an outstanding redesign of SPLASH and its complete product
                        range. Come with us and enter the new and exciting world of SPLASH. Enjoy good
                        taste!
                    </p>
                    <img src={brandBook1} className="brand-book" alt="brand book"/>
                    <img src={brandBook2} className="brand-book" alt="brand book"/>
                    <img src={brandBook3} className="brand-book" alt="brand book"/>
                    <img src={brandBook4} className="brand-book" alt="brand book"/>
                    <img src={brandBook5} className="brand-book" alt="brand book"/>

                </div>

            </section>
        </div>

    );
}
