import React from "react";
import "../styles/Header.css"

function Header(props){
    return(
        <header className="header">
            <div className="logo-title">
                <img src="https://w7.pngwing.com/pngs/1014/215/png-transparent-24-7-text-screenshot-24-7-service-customer-service-drain-call-centre-rent-miscellaneous-company-text.png" alt="" className="logo" />
            </div>
            <nav className="navigation">
                <ul className="nav-links">
                    <div className="link-list">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">{props.data.info.name}</a>
                    </li>
                    </div>
                    <li>
                        <img src={props.data.info.picture}
                        style={{width: "40px", height: "40px", borderRadius: "50%"}} />
                    </li>
                    <li>
                        <button 
                         style={{width: "100px", height: "40px", cursor: "pointer"}}
                         onClick={() =>{
                            window.localStorage.clear();
                            window.location.assign("http://localhost:3000/")
                        }}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;