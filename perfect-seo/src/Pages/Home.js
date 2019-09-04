import React from 'react'
import NavBar from '../component/NavBar'
import Header from '../component/Header'
import Gallery from '../component/Carousel'
import Form from '../component/Form'

class Home extends React.Component {
    render () {
        return (
            <>
                <NavBar />
                <Header />
                <Gallery />
                <Form />
            </>
        )
    }
}

export default Home;