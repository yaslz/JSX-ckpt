import React from 'react'
import { Button, Card } from 'react-bootstrap'
import pic from "./pic.jpg"
import './Movielist.css'
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic6.jpg"
import pic7 from "./pic7.jpg"
import pic8 from "./pic8.jpeg"
import pic9 from "./pic9.jpg"
import pic10 from "./pic10.jpeg"




const Movielist = () => {
  return (
    <div className='movielist'>
        <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Mascarade</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Bienvenue dans la jungle</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic3} height = "63%"/>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Smile</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic4} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Ducobu président</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>L'école est à nous</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic6} height = "70%" />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>L'oubli que nous serons</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic7} height = "70%" />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Regarde moi</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic8} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Les indestructibles 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic9} />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Amélie</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom : "5%"}}>
      <Card.Img variant="top" src={pic10} height = "70%" />
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>Pourris gatés</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire le film</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movielist