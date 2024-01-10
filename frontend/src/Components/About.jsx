import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we&apos;re serious about is food.</p>
                    </div>
                    <p className="mid">A customer is the most important visitor on our premises, he is not dependent on us. We are dependent on him. He is not an interruption in our work. He is the purpose of it. He is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so</p>
                    <Link to={"menu"}>Explore Menu <span><HiOutlineArrowNarrowRight /></span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
};


export default About