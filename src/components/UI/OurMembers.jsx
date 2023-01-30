import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import portfolio from "../../assets/all-images/portfolio.png"

const OUR__MEMBERS = [
  {
    name: "Denzel Oceans",
    experience: "The lead Manager",
    fbUrl: "https://www.facebook.com/salvato.luiz.9",
    instUrl: "https://www.instagram.com/salvato_luiz/",
    twitUrl: "https://twitter.com/LuiceSalvato",
    linkedinUrl: "https://www.linkedin.com/in/salvato-luis/",
    imgUrl: "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGFmcmljYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Vova Bosibori",
    experience: "Head of sales department",
    fbUrl: "https://www.facebook.com/salvato.luiz.9",
    instUrl: "https://www.instagram.com/salvato_luiz/",
    twitUrl: "https://twitter.com/LuiceSalvato",
    linkedinUrl: "https://www.linkedin.com/in/salvato-luis/",
    imgUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Salvato Luis",
    experience: "Lead Front-end Developer",
    fbUrl: "https://www.facebook.com/salvato.luiz.9",
    instUrl: "https://www.instagram.com/salvato_luiz/",
    twitUrl: "https://twitter.com/LuiceSalvato",
    linkedinUrl: "https://www.linkedin.com/in/salvato-luis/",
    imgUrl: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Allan Smith",
    experience: "Planning & Development",
    fbUrl: "https://www.facebook.com/salvato.luiz.9",
    instUrl: "https://www.instagram.com/salvato_luiz/",
    twitUrl: "https://twitter.com/LuiceSalvato",
    linkedinUrl: "https://www.linkedin.com/in/salvato-luis/",
    imgUrl: "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFmcmljYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
