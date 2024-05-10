import { Container } from "react-bootstrap"

import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <div>
            <NavigationBar />
            <Container fluid={true} className="px-0">
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout;