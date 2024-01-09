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
                    <p className="mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque odio quod itaque ullam ipsa? Non, quasi. A quae nemo fuga non doloremque sequi maiores velit cupiditate, laborum odio dolorum repellat!</p>
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