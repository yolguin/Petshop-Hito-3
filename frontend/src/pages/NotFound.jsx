import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src="/error.jpg" />

            <div className="notFound">
                <span>Site Not Found</span>
                <Link to="/" className="btnGoHome">ir al home</Link>
            </div>
        </div>
    )
}

export default NotFound