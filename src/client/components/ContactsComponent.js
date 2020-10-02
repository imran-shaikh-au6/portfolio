import React from "react";
import "../css/index.css";

import facebook from "../images/ic_black_facebook.png";
import twitter from "../images/ic_black_twitter.png";
import linkedin from "../images/ic_black_linkedin.png";
import github from "../images/ic_black_github.png";
import youtube from "../images/ic_black_youtube.png";

class ContactsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className={"contacts-contents-container"}>
                <h3>Contact No: +91 9423932373</h3>
                <button
                    style={{
                        height: "50px",
                        width: "130px",
                        backgroundColor: "Black",
                    }}
                >
                    <a
                        href="https://drive.google.com/file/d/1tlJpCYVPNaUD84C7R7Y5YwdydWUMSG9k/view?usp=sharing"
                        target="_blank"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Download Resume
                    </a>
                </button>

                <div className={"contacts-social-container"}>
                    <a
                        href="https://www.facebook.com/people/Imran-Shaikh/100003969285791"
                        target="_blank"
                    >
                        <img src={facebook} className={"contact-social-img"} />
                    </a>
                    <a href="https://twitter.com/iimran786" target="_blank">
                        <img src={twitter} className={"contact-social-img"} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/imran-shaikh-4b98881ab/"
                        target="_blank"
                    >
                        <img src={linkedin} className={"contact-social-img"} />
                    </a>
                    <a
                        href="https://github.com/imran-shaikh-au6?tab=repositories"
                        target="_blank"
                    >
                        <img src={github} className={"contact-social-img"} />
                    </a>
                </div>
                <div className={"contacts-footer-div"}></div>
                <p className={"contacts-footer-text"}>
                    © 2020 IMRAN PORTFOLIO. ALL RIGHTS RESERVED.
                </p>
            </div>
        );
    }
}

export default ContactsComponent;
