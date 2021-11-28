import './Card.css';
import backOfCard from './img/cardback.png';
import { useState, useEffect} from "react";

const Card = ({item, handleCardClick, turnAroundCard, lockCards}) => {
    const [lock, setLock] = useState(false);

    const handleflip = () => {
        handleCardClick(item);
    }

    useEffect(() => {
        if(lockCards && turnAroundCard) {
            setLock(true);
        }
        console.log(lockCards);
      }, [lockCards]);

      useEffect(() => {
        console.log(lock);
      }, [lock]);




    return (
        
    <div className={lock || turnAroundCard ? "turnAroundCard" : ""}>
        <img src={`${item.image}`} className="frontSideOfImg" alt=""/>   
        <img src={`${backOfCard}`} className="backSideOfImg" onClick={handleflip} alt="" />
    </div>
    );
};

export default Card;