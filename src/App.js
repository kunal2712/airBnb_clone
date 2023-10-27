import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from './data'

function App() {

  const cards = data.map(item =>{
    return(
      <Card
        item = {item}
      />

    )

  })

  return (
    <div>
    <Navbar />
    <Hero />
    <div className='templates'>
    {cards}
    </div>
    </div>
  );
}

export default App;
