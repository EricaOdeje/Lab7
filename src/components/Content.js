 {/*  For content.js, take the html from app.js and put it in here*/}
function Content(){
    return(
        <div>
             <h1>Hello World!</h1>
      {/* This is how you add the date and time */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

}

export default Content;

