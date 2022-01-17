import macky from "../assets/profile.jpg"
import emailLogo from "../assets/Email-logo.png"
import linkedln from '../assets/LinkedIn-logo.png'
import '../styles/styles.css'
import  styleinfo from '../styles/InfosApp.module.css'
const Info = () => {
  return (
    <div className={styleinfo.container}>
      <header className={styleinfo.header}>
        <img
          className={styleinfo.avatar}
          src={macky}
          alt="macky"
        />
      </header>
      <div className={styleinfo.bio}>
        <h1 className={styleinfo.name}>Macky</h1>
        <p className={styleinfo.title}>Frontend Developer</p>
        <p className={styleinfo.small}>(www.info)</p>
        <div className={styleinfo.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styleinfo.links} ${styleinfo.email}`}
            href="mailto:billoaq@sss.com"
          >
            <img className={styleinfo.icons} src={emailLogo} alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styleinfo.links} ${styleinfo.linkedin}`}
            href="https://www.linkedin.com/in/macky"
          >
            <img className={styleinfo.icons} src={linkedln} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
export default Info;
