import { Container } from "react-bootstrap"

import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <>
            <NavigationBar />
            {/* <Container fluid={true} className="px-0"> */}
                <Outlet />
            {/* </Container> */}
        </>
    )
}

export default Layout;