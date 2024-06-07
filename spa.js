// Define a component called Greetings
function Greetings() {
  return <h1>Hello readers, Thankyou for reading this blog !</h1>;
}


// Render the component to the DOM
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 
root.render(<Greetings />);