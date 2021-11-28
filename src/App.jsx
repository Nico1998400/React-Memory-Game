import { useState, useEffect} from "react";
import Card from './Components/Card';
import './App.css';


function App() {
  const [card, setCard] = useState([]);
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [lockCards, setLockCards] = useState();
  // const prevDisplayCard = usePrevious(displayCard);
  // const [cardValue, setCardValue] = useState([]);

  useEffect(() => {
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  }, []);

  async function fetchData(url) {
    const res1 = await fetch(url);
    const deck = await res1.json();
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`);
    const data = await res.json();
    console.log(data);
    setCard(data);
  }

  function handleCardClick(item) {
    if(!card1) {
    setCard1(item)
    } else if (!card2) {
    setCard2(item);
    } else {

    }
  } 

  useEffect(() => {
    compare();
  }, [card2]);

  useEffect(() => {
    reset();
    setLockCards(false);
  }, [lockCards]);

  function compare(){
    if(card1 && card2) {
    if(card1.value === card2.value) {
      setLockCards(true);
    } else {
      setTimeout(() => reset(), 1500);
    }
  }
}

  function reset(){
    setCard1(null);
    setCard2(null);
  }



  return (
    <div className="App-Page">
    {card.cards?.map((item) => (
    <Card item={item} key = {item.code} handleCardClick = {handleCardClick} turnAroundCard={item === card1 || item === card2} lockCards = {lockCards}/>
    ))}
    </div>
  );     
}

export default App;
