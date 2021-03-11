import { Carousel, Container } from "react-bootstrap";

const HomeComponent = () => {
    return (
        <>
          <Container className="my-5 text-muted">
              <img src="https://i.ibb.co/sRY30yw/texas-wine-country.jpg" class="img-fluid my-3" alt="winery"></img>
              <h5 className="my-3">
                  Argentinian Wines
              </h5>
              <h1 className="mb-3">
                  Aimara
              </h1>              
              <p className="lead mb-5">
              Argentina has built a reputation of not only high quality, but also of the unique link wine producers make between their favourite protein and their favourite grape variety: The Malbec.
With more than two centuries of history, Aimara produce their wines in the region of San Rafael, Mendoza.
              </p>
          </Container>
          <br />
        <br />
        <Carousel className="d-block w-100 carousels" interval={7000} controls={false} indicators={false}>                       
            <Carousel.Item>    
                <p className="blockquote font-italic mx-auto w-50 text-center text-muted">
            "Enjoying fine food and wine at the family table, surrounded by your love ones and friends, is not just a joy- It's one of the highest forms of living."
                <br />
                  <cite title="Source Title"> Robert Mondavi</cite>
                </p>
            </Carousel.Item>
            <Carousel.Item>  
                <p className="blockquote font-italic mx-auto w-50 text-center text-muted">
                    "More important than the food pairing is the person with whom you drink the wine"
                    <cite title="Source Title"> Christian Moueix</cite>
                </p>
            </Carousel.Item>
            <Carousel.Item>              
                <p className="blockquote font-italic mx-auto w-50 text-center text-muted">
                    "Wine... the intellectual part of the meal."
                    <cite title="Source Title"> Alexandre Dumas</cite>
                </p>
            </Carousel.Item>
            <Carousel.Item>              
                <p className="blockquote font-italic mx-auto w-50 text-center text-muted">
                    "Wine makes daily living easier, less hurried, with fewer tensions and more tolerance."
                    <cite title="Source Title"> Benjamin Franklin</cite>
                </p>
            </Carousel.Item>
            <Carousel.Item>              
                <p className="blockquote font-italic mx-auto w-50 text-center text-muted">
                    "Wine is one of the most civilized things in the world and one of the most natural things of the world that has been brought to the greatest perfection, and it offers a greater range for enjoyment and appreciation than, possibly, any other purely sensory thing."
                    <cite title="Source Title"> Ernest Hemingway</cite>
                </p>
            </Carousel.Item>
        </Carousel>      
          <br />
          <br />
          <br />
          <h1 className="my-5 text-center text-muted">
              Varietals
          </h1>
        </>
    );
};
export default HomeComponent;