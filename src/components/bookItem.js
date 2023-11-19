import Card from 'react-bootstrap/Card';


function BookItem(props) {
    return (
        <div> 
                       {/*Since I already installed bootstrap, I imported the card component.*/}
    <Card>
            {/*I used props.mybook.title to pass data from one component to another.*/}
      <Card.Body>{props.mybook.title}</Card.Body>
    </Card>
            <img src={props.mybook.cover}></img>
            <p>{props.mybook.author}</p>
        </div>
    );

}

export default BookItem;