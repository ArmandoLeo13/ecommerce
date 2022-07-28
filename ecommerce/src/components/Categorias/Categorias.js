import './Categorias.css'
import Card from 'react-bootstrap/Card';

const Categorias = () =>{
    return(
        // 
        //     <div className='card'>
        //         <div className='card-body'>
        //             <h2 className='card-title'>Cervezas</h2>
        //         </div>
        //     </div>
        //     <div>
        //         Vinos
        //     </div>
        //     <div>
        //         Bebidas no Alcoholicas
        //     </div>
        // </div>
        <div className='cajaCategorias'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>
                        Cerveza
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            
            </Card.Body>
        </Card>
      </div>
    )
};

export default Categorias;