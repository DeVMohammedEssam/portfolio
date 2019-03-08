import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="contact ">
        <h3>Contact Me</h3>
        <div className="contact__icons">
          <div className="phone my-4">
            <img src="/images/icons/phone.png" alt="" />
            <span className="ml-4">011-294-661-67</span>
          </div>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/meemasfw?ref=bookmarks"
              className="my-4"
            >
              <img src="/images/icons/facebook.png" alt="" />
              <span className="ml-4 text-light">Mohammed Essam</span>
            </a>
            <div className="my-4">
              <img src="/images/icons/gmail.png" alt="" />
              <span className="email ml-4">DeVmohammedEsssam@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">copyrights &copy; Mohammed Essam</div>
    </footer>
  );
};

export default Footer;
