import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './components/Content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 {/*  To allow client side routing, I installed the package 
  npm install react-router-dom */}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         {/*  I added a navbar by installing bootstrap*/}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          {/*  I added routing links so you can navigate easily*/}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
