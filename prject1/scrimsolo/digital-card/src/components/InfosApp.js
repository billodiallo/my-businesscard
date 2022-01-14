import macky from "../assets/profile.jpg"
import '../styles/styles.css'
import  styleinfo from '../styles/InfosApp.module.css'
const Info = () => {
return(
  <div className={styleinfo.info1}>

    <header>
    <img src = {macky} alt= "m" className={styleinfo.photo}/>
    </header>
  
  <h1 className={styleinfo.head1}>Macky Sall</h1>
  <p className={styleinfo.frontend}>Front end Developer</p>
  <small>text not visible now</small>


</div>

);
 
}

export default Info;