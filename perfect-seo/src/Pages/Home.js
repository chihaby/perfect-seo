import React from 'react'
import Header from '../component/Header'
import Gallery from '../component/Carousel'
import Form from '../component/Form'
import  { Message } from '../component/Message'

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Gallery />
                <Message />
                <Form />
            </>
        )
    }
}

export default Home;