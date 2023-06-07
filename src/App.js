import React from "react";
import { styled } from "styled-components";
import {v4 as uuid} from "uuid"
import GlobalStyle from "./globalStyles.js";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import VideoCards from "./Carousel/VideoCards";
import ListaCards from "./Carousel/ListaCards"
import SliderVideos from "./Carousel/SliderVideos";
import "./App.css";
function App() {
  
  const categorias = [

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
      descripcion: "Formación Front End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#00C86F",
      descripcion: "Formación Back End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8C2A",
      descripcion: "Formación Innovación y Gestión de Alura Latam"
    }
  ];

 
  const videos = [
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      link: 'https://www.youtube.com/watch?v=-LmFK6skG7s',
      imagen: 'https://i.ytimg.com/vi/-LmFK6skG7s/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      link: 'https://www.youtube.com/watch?v=AG2QssLpQzI',
      imagen: 'https://i.ytimg.com/vi/AG2QssLpQzI/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      link: 'https://www.youtube.com/watch?v=JJgcJ9g-a30',
      imagen: 'https://i.ytimg.com/vi/JJgcJ9g-a30/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      link: 'https://www.youtube.com/watch?v=j71g5TiMA-M',
      imagen: 'https://i.ytimg.com/vi/j71g5TiMA-M/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      colorPrimario: "#00C86F",
      link: 'https://www.youtube.com/watch?v=Z024LSCMqFk',
      imagen: 'https://i.ytimg.com/vi/Z024LSCMqFk/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      colorPrimario: "#00C86F",
      link: 'https://www.youtube.com/watch?v=eejIHbOk_uI',
      imagen: 'https://i.ytimg.com/vi/eejIHbOk_uI/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      colorPrimario: "#00C86F",
      link: 'https://www.youtube.com/watch?v=3aK3Omo2RrU',
      imagen: 'https://i.ytimg.com/vi/3aK3Omo2RrU/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      colorPrimario: "#00C86F",
      link: 'https://www.youtube.com/watch?v=ov7vA5HFe6w',
      imagen: 'https://i.ibb.co/KVm7fZh/image-7-1.png'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      colorPrimario: "#FF8C2A",
      link: 'https://www.youtube.com/watch?v=pOYyav4qx7o',
      imagen: 'https://i.ytimg.com/vi/pOYyav4qx7o/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      colorPrimario: "#FF8C2A",
      link: 'https://www.youtube.com/watch?v=mwNfWRsDDWE',
      imagen: 'https://i.ytimg.com/vi/mwNfWRsDDWE/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      colorPrimario: "#FF8C2A",
      link: 'https://www.youtube.com/watch?v=vhwspfvI52k',
      imagen: 'https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      colorPrimario: "#FF8C2A",
      link: 'https://www.youtube.com/watch?v=7lnmW8fB0nM',
      imagen: 'https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg'
    }
  ];

  const StyledVideo = styled.section`
    background: black;
    display:flex;
    justify-content: space-between ;
    align-items: center;
    flex-wrap: wrap;
`

  const CardsCategorias = styled.div`
    background: black;
    width: 100%;
    padding: 20px 30px;

  `
const ContenidoCards = styled.div`
   margin: 10px;
  `
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Banner/>
      <StyledVideo>
        <CardsCategorias>
          {
            categorias.map((categoria) => <> <ListaCards
              datos={categoria}
              key={categoria}
            />
            
            <ContenidoCards>
              <SliderVideos>
                {
                  videos.filter ((v) => v.categoria === categoria.titulo).map((video)  => <VideoCards
                    datos={video}
                    key={video.id}
                  />
                  )
                }
              </SliderVideos>
            </ContenidoCards>
            </>
            )
          }
        </CardsCategorias>
      </StyledVideo>
      
        
      <Footer/>
      <Container>
        
      </Container>
      
    </div>
  );
}

export default App;
