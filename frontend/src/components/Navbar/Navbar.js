import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion"
import withTheme from "../Darktheme";
import dark from "../images/darklogo.png"
import light from "../images/color logo.png"
import sun from "../images/sun.png"
import moon from "../images/moon.png"

// function ReactHook(){
//     const [fix, setFix] = useState(false)
//     function setFixed(){
//         if (window.scrollY >= 392){
//             setFix(true)
//         }else{
//             setFix(false)
//         }
//     }
//     window.addEventListener("scroll", setFixed)
// }

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

const header = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {duration: 0.02, ease: easeing}
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.2,
            ease: easeing
        }
    }
}

class Navbar extends Component {

    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    constructor(props) {
        super(props);

        this.state = {
            isDarkMode: false,
        };
    }

    click = () => {
        const handleModeChange = () => {
            this.setState(prevState => ({
                isDarkMode: !prevState.isDarkMode,
            }));
            withTheme()
        }
        handleModeChange();
    }

    render() {

        const {isDarkMode} = this.state;
        const imageSrc = isDarkMode ? dark : light;
        const img_src = isDarkMode ? sun : moon;

        return (
            <motion.nav id="navbar" className="navbar" initial='initial' animate='animate'>
                <motion.div className="navbar--header" varients={stagger}>
                    <motion.div variants={header}>
                        <Link className='links1' to='/'>
                            <img className='head' src={imageSrc}/>
                        </Link>
                    </motion.div>
                    <motion.div variants={stagger}>
                        <motion.ul variants={header} id="nav--item"
                                   className={this.state.clicked ? "#nav--item active" : "#nav--item"}>
                            <NavLink to='/' className='links'>
                                <li className="nav--link">Home</li>
                            </NavLink>
                            <NavLink to='/products' className='links'>
                                <li className="nav--link">Products</li>
                            </NavLink>
                            <NavLink to='/contact' className='links'>
                                <li className="nav--link">Contact</li>
                            </NavLink>
                            <NavLink to='/about' className='links'>
                                <li className="nav--link">About</li>
                            </NavLink>
                            <NavLink>
                                <li className='nav--link'><img id='icon' className="night" onClick={this.click}
                                                               src={img_src}/>
                                </li>
                            </NavLink>
                        </motion.ul>
                    </motion.div>
                    <div id='mobile' onClick={this.handleClick}><i id="bar"
                                                                   className={this.state.clicked ? "fas fa-times " : "fas fa-bars"}></i>
                    </div>
                </motion.div>
            </motion.nav>
        )
    }
}

export default Navbar
