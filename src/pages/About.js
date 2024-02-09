import React from 'react'


const About = () => {
  const aboutStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={aboutStyle}>
      <h2>About Us</h2>
      <p>
        Welcome to MobileSphere, your one-stop destination for the latest trends in mobile fashion and accessories.
      </p>
      <p>
        At MobileSphere, we believe in providing our customers with high-quality products that not only enhance their
        mobile experience but also reflect their personal style.
      </p>
      <p>
        Our mission is to make cutting-edge technology accessible and stylish for everyone. We curate a collection of the latest
        mobile devices, accessories, and gadgets to keep you connected and on-trend.
      </p>
      <p>
        Feel free to explore our online store and discover a world of innovation and style. If you have any questions or
        suggestions, don't hesitate to <a href="/contact">contact us</a>.
      </p>
      <p>Thank you for choosing MobileSphere for your mobile needs!</p>
    </div>
  );
};

export default About;
