import React from "react";

function About() {
  return (
    <div> 

      <section className="my-5">
            <h1 id="about"><i>About Me</i></h1>
        </section>

        <section id="about-me" className="sections about-me">

        <article className="section-right">
        <div className="about-me-content">

        <img src="https://user-images.githubusercontent.com/117393835/222885570-47aad525-a32b-4c75-836d-6a96cf0d1f28.jpeg"
          
            alt="Vida Nsiah"
            className="me-hero-img"
          />
        </div>
      


      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </article>

    </section>
    </div>
  );
}

export default About;
