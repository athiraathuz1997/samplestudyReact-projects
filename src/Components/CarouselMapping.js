import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const CarouselMapping = () => {
    let list = [
        { name: "first Slide", text: "This is the first slide", image: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" },
        { name: "second Slide", text: "This is the second slide", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg" },
        { name: "third Slide", text: "This is the third slide", image: "https://sample-videos.com/img/Sample-jpg-image-500kb.jpg" },
    ]
    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h4>React-Bootstrap Carousel Component</h4>
            <Carousel>
                {
                    list.map((item) => {
                        return (<Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt="Image One"
                            />
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                }
            </Carousel>

        </div>
    )
}

export default CarouselMapping