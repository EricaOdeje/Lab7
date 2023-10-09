import Card from 'react-bootstrap/Card';


function BookItem(props) {
    return (
        <div> 
            
    <Card>
      <Card.Body>{props.mybook.title}</Card.Body>
    </Card>
            <img src={props.mybook.thumbnailUrl}></img>
            <p>{props.mybook.authors[0]}</p>
        </div>
    );

}

export default BookItem;