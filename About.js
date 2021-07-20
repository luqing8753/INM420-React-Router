import picture from './../images/profile-picture.jpg';
import './../css/App.css';

export default function About() {
    return (
        <div className="App about">
            <section className="app-profile">
                <div className="App-profile-picture">
                    <img src={picture} className="profile-picture" alt="profile picture"/>
                </div>
                <div className="introduction">
                    <p className="introduction-text">As a professional web developer, I have always
                        been result-oriented and solution-oriented. In addition, I am good at thinking
                        and have strong logical thinking skills, and I am especially passionate about
                        using coding techniques and programming solutions.
                    </p>
                    <p>
                        At the same time, I am still a creative and imaginative person, which is of
                        great help to my work in UI/UX design. I am good at putting forward design plans
                        and solutions with customers as the center. I can learn quickly and design
                        scalable solutions to challenging problems, which will allow me to work as a
                        front-end designer and developer.
                    </p>
                    <p>
                        I learned C, C++, HTML, CSS, Bootstrap, jQuery, JavaScript, Java, MySQL, data
                        structures, etc. during my university. I also have a deep understanding of Vue
                        and React. I can use these frameworks to build websites. After that, I learned
                        the use of Adobe related design software at Seneca College, including photoshop,
                        Illustrator, XD, After Effects, InDesign, Premiere, etc. I can use XD and Sketch
                        to design mobile app and website, through the use of Premiere and After Effects
                        to edit video and add special effects, and use photoshop, Illustrator, InDesign
                        to do some design and layout work.
                    </p>
                    <p>
                        In terms of website design and development, I reckon that thinking and
                        imagination are the prerequisites for doing things. The design and planning of
                        the website is very important in the entire workflow. Because the correct design
                        and planning of the website in advance can avoid losses caused by major problems
                        in the later period. In addition, the design is to better serve users, both in
                        terms of appearance and function. I firmly believe that good design will bring
                        users a good mood and a more convenient lifestyle.
                    </p>
                    <p>
                        I am full of enthusiasm for my career, and I hope to work hard to do everything
                        well. I look forward to new things and new challenges, which can make me
                        continue to improve and gradually become a leader.
                    </p>
                    <p>
                        Please feel free to reach me at qinglu8753@gmail.com or 647-819-8753
                    </p>
                </div>

            </section>
        </div>

    );
}
