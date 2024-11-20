import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import '../component/New folder/error.css'
function Error(){
    return(
        <>
        <Container>
            <p className="top">Home / error 404</p>
            <div className="title">
            <h1>Error 404 Not Found</h1>
            <p>your visited page not found. You may go Home page</p>
            <Link to='/'>Back to home page</Link>
            </div>
        </Container>
        </>
    )
}
export default Error