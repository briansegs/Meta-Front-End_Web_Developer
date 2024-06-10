import { useState } from "react";
import "./App.css";

function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Brian",
    LastName: "ShotGunn",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button",
  });

  const handleClick = () => {
    setGiftCard({
      ...giftCard,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card..",
    });
  };

  return (
    <div>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.LastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>

      {giftCard.valid && <button onClick={handleClick}>Spend Gift Card</button>}
    </div>
  );
}

export default App;
