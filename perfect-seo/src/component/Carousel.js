import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

    ];

    function Carousel() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        if (index === 3) {
            setIndex(0);
        } else {
            setIndex(prev => prev + 1);
        }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
        style={{
            background: "black",
            height: "100vh",
            width: "100vw"
        }}
        index={index}
        onRequestChange={i => {
            setIndex(i);
        }}
        >
        {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
        </Gallery>
    );
}

export default Carousel;