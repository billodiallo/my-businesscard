import React from 'react';
import github from '../assets/Github-logo.png';
import twitter from '../assets/Twitter-logo.png';

import footerstyle from '../styles/Footer.module.css';

function Footer() {
  return (
    <main className={footerstyle.footer}>
      <div className={footerstyle.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={footerstyle.links}
          href="www.sssss.com"
        >
          <img className={footerstyle.socialIcons} src={github} alt="" />
          {' '}
          Github
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className={footerstyle.links}
          href="www.twwitter"
        >
          <img className={footerstyle.socialIcons} src={twitter} alt="" />
          {' '}
          Twitter
        </a>

      </div>

    </main>

  );
}

export default Footer;
