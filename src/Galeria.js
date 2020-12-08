import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bands from './img/bands.jpg'
import casino from './img/casino.png'
import police from './img/police.png'



const Galeria = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bands}
      alt="Bandas tiroteos"
    />
    <Carousel.Caption>
      <h3>Peleas de bandas</h3>
      <p className="text-white">Pelea con tus amigos contra otras bandas para ganarte el respeto.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={casino}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-black">Consigue grandes fortunas</h3>
      <p className="text-white">Vive de la forma más lujosa y demuestra quien manda en la ciudad.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={police}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Atrapa a los delincuentes</h3>
      <p className="text-white">Lucha a diario contra la delincuencia de la ciudad.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default Galeria
