import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'; // Make sure to import your CSS if needed
import image1 from './assets/fr1.png';
import image2 from './assets/bk1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
const navigate = useNavigate();

const handleClick1 = () => {
    navigate('/main_editor');
};

const handleClick2 = () => {
  navigate('/live_preview');
};

const handleClick3 = () => {
  navigate('/whiteboard');
};
    return (
        <div>
            <section id="" className=" py-20 text-center mt-5 ">
                <div className=" mx-auto flex flex-col ">
                    <h1 className="text-4xl font-bold mb-4">Code Together, Anywhere</h1>
                    <p className="text-lg mb-6">Create, Collaborate, and Innovate with Our Online Code Editor</p>
                </div>
            </section>

          
            <div className='flex flex-col md:flex-row gap-5  mt-5 justify-center'>
              <div>
                 <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Languages</Card.Title>
                        <Card.Text>
                            {/* Additional text can go here */}
                        </Card.Text>
                        <Button variant="primary" onClick={handleClick1}>Try Now</Button>
                    </Card.Body>
                </Card>
              </div>

              <div>
                  <Card style={{ width: '28rem' }}>
                      <Card.Img variant="top" src={image1} />
                      <Card.Body>
                          <Card.Title>Live Preview</Card.Title>
                          <Card.Text>
                              {/* Additional text can go here */}
                          </Card.Text>
                          <Button variant="primary" onClick={handleClick2}>Try Now</Button>
                      </Card.Body>
                  </Card>
              </div>

              <div>
                  <Card style={{ width: '28rem' }}>
                      <Card.Img variant="top" src={image1} />
                      <Card.Body>
                          <Card.Title>WhiteBoard</Card.Title>
                          <Card.Text>
                              {/* Additional text can go here */}
                          </Card.Text>
                          <Button variant="primary" onClick={handleClick3}>Try Now</Button>
                      </Card.Body>
                  </Card>

              </div>
   

    

   
</div>

   
        </div>
    );
};

export default Home;

