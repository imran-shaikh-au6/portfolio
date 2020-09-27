import React from "react";
import "../css/index.css";

import profile from "../images/ic_profile_img.jpg";
import facebook from "../images/ic_facebook.png";
import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import youtube from "../images/ic_youtube.png";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div className={"dashboard-header-container"}>
                <div className={"dashboard-banner-overlay"}></div>
                <div className={"dashboard-profile-div"}>
                    <div className={"dashboard-profile-img-container"}>
                        <img
                            src={profile}
                            className={"dashboard-profile-img"}
                        />
                        <div className={"social-profile-container"}>
                            <a
                                href="https://www.facebook.com/people/Imran-Shaikh/100003969285791"
                                target="_blank"
                            >
                                <img
                                    src={facebook}
                                    className={"social-profile-icon"}
                                />
                            </a>
                            <a
                                href="https://twitter.com/iimran786"
                                target="_blank"
                            >
                                <img
                                    src={twitter}
                                    className={"social-profile-icon"}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/imran-shaikh-4b98881ab/"
                                target="_blank"
                            >
                                <img
                                    src={linkedin}
                                    className={"social-profile-icon"}
                                />
                            </a>
                            <a
                                href="https://github.com/imran-shaikh-au6?tab=repositories"
                                target="_blank"
                            >
                                <img
                                    src={github}
                                    className={"social-profile-icon"}
                                />
                            </a>
                            <a href="#/" target="_blank">
                                <img
                                    src={youtube}
                                    className={"social-profile-icon"}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={"dashboard-profile-details-container"}>
                        <p className={"dashboard-profile-name-label"}>
                            Hello, I'm{" "}
                            <span className={"dashboard-profile-name"}>
                                Imran Shaikh
                            </span>
                        </p>
                        <p className={"dashboard-profile-deatils"}>
                            Hello, my name is Imran Shaikh, I am a certified
                            UX/UI Web designer and a Full Stack Web Developer I
                            have extensive experience in creating modern and
                            responsive Web Application from scratch and in
                            development of Enterprise Web application. I breathe
                            design and creativity.I am also passionate about
                            coding too. In terms of the Web framework having
                            experience in both back-end and front-end
                            development, developed many full-stack based web
                            application using Node.js, React.js & MongoDB.
                        </p>
                        <p className={"dashboard-profile-deatils"}>
                            I always have been fascinated between the marriage
                            of design and programming .I have worked alongside
                            some talented teams on a number of high profile
                            projects. I have a wide range of skills that include
                            design front-end development with HTML5, CSS3,
                            Javascript, Responsive web design and back-end
                            development .
                        </p>
                    </div>
                </div>
                <img className={"dashboard-banner-img"} />
            </div>
        );
    }
}

export default ProfileComponent;
