import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from'../../images/about2.jpg';
import MissionImage from'../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>

      Our Passion for Fitness, Your Path to Greatness: Learn About Our Gym's Story and Community
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Welcome to our gym, where we are committed to helping you achieve
              your fitness goals in a safe and welcoming environment. Our
              state-of-the-art facilities are equipped with the latest fitness
              equipment and staffed by experienced trainers who are dedicated to
              helping you succeed.
            </p>
            <p>
              At our gym, we believe that fitness should be fun and accessible
              to everyone, regardless of their age, fitness level, or
              background. That's why we offer a wide range of classes and
              programs, from high-intensity interval training to yoga and
              Pilates, that are designed to meet the diverse needs of our
              members. 
            </p>
            <p>
              Join our community of fitness enthusiasts today and experience the
              benefits of a healthy and active lifestyle. 
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          
       
          <div className="about__section-content">
            <h1>Our Vision</h1>
            
            <p>
              At our gym, we believe that fitness should be fun and accessible
              to everyone, regardless of their age, fitness level, or
              background. That's why we offer a wide range of classes and
              programs, from high-intensity interval training to yoga and
              Pilates, that are designed to meet the diverse needs of our
              members. Our trainers are here to help you find the right workout
              for your individual needs and provide the support and guidance you
              need to stay motivated and on track.
            </p>
            <p>
              Join our community of fitness enthusiasts today and experience the
              benefits of a healthy and active lifestyle. From personalized
              training plans to group fitness classes and everything in between,
              our gym has everything you need to achieve your fitness goals and
              feel your best. We look forward to welcoming you to our gym and
              helping you on your fitness journey.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            
            <p>
              At our gym, we believe that fitness should be fun and accessible
              to everyone, regardless of their age, fitness level, or
              background. That's why we offer a wide range of classes and
              programs, from high-intensity interval training to yoga and
              Pilates, that are designed to meet the diverse needs of our
              members. 
            </p>
            <p>
              From personalized
              training plans to group fitness classes and everything in between,
              our gym has everything you need to achieve your fitness goals and
              feel your best. We look forward to welcoming you to our gym and
              helping you on your fitness journey.
            </p>
          </div>
        </div>
      </section>






    </>
  );
};

export default About;
