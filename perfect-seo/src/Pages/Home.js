import React from 'react'
import Header from '../component/Header'
import Gallery from '../component/Carousel'
import Form from '../component/Form'
// import { AuthButton } from '../component/AuthButton'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render () {
        return (
            <>
                <Header />
                <Gallery />
                <Form />
                {/* <AuthButton /> */}
                <ul>
                <li><Link to='/public'>Public Page</Link></li>
                <li><Link to='/protected'>Protected Page</Link></li>
                </ul>
            </>
        )
    }
}

export default Home;