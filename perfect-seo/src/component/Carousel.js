import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
];

function Carousel() {
    const [index, setIndex] = React.useState(0);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (index === 4) {
    //             setIndex(0);
    //         } else {
    //             setIndex(prev => prev + 1);
    //         }
    //     }, 3000);
    //     return () => clearInterval(timer);
    // }, [index]);

    return (
        <Gallery
            style={{
                background: "white",
                height: "50vh",
                width: "50vw",
                textAlign: "center",
                margin: "auto"
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