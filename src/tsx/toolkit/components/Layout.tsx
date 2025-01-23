import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <header>
                <div className="logo">LOG-GOTIP-PE</div>
                <div className="nav-tools">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/favourite">Favourite</NavLink>
                    </nav>
                    <div className="dark__mode">
                        <div className="dark__mode-btn">
                            <input type="checkbox" id="dark"/>
                                <label htmlFor="dark"></label>
                        </div>
                        <div className="sun"></div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="contain">
                    <div className="col">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                            <li>Redeem code</li>
                            <li>WHOIS lookup</li>
                            <li>Site map</li>
                            <li>Web templates</li>
                            <li>Email templates</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li><img src="https://svgshare.com/i/5fq.svg" width="32px" style={{"width": "32px"}}/></li>
                            <li><img src="https://svgshare.com/i/5eA.svg" width="3px" style={{"width": "32px"}}/></li>
                            <li><img src="https://svgshare.com/i/5f_.svg" width="32px" style={{"width": "32px"}}/></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </footer>
        </>
    )
}