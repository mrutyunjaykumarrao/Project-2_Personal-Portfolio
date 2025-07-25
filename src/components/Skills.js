import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Full-stack developer with expertise in modern web and mobile technologies.<br></br>Passionate about creating efficient, scalable, and user-friendly applications.</p>
                        <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            className="owl-carousel owl-theme skill-slider"
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            <div className="item">
                                <img src={meter1} alt="Front-end Development" />
                                <h5>Front-end Development</h5>
                                <p>React.js, Vue.js, HTML5, CSS3, JavaScript (ES6+)</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Back-end Development" />
                                <h5>Back-end Development</h5>
                                <p>Node.js, Express.js, Django, REST & GraphQL</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Mobile Development" />
                                <h5>Mobile Development</h5>
                                <p>Flutter (Dart), React Native</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Database & DevOps" />
                                <h5>Database & DevOps</h5>
                                <p>MongoDB, PostgreSQL, Firebase, Docker, GitHub Actions</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background shape" />
    </section>
  )
}
