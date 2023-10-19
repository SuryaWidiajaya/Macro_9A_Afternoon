import React, { useState } from 'react';

function App1() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: new Date().getTime(), // ID unik untuk setiap card
      image: null, // Inisialisasi gambar sebagai null
    };
    setCards([...cards, newCard]);
  };

  const handleImageChange = (cardId, event) => {
    const selectedImage = event.target.files[0];

    // Temukan card dengan ID yang sesuai
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          image: URL.createObjectURL(selectedImage), // Menyimpan gambar sebagai URL data
        };
      }
      return card;
    });

    setCards(updatedCards);
  };

  return (
    <div className="App">
      <button onClick={addCard}>Tambahkan Card Baru</button>
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(card.id, event)}
            />
            <img
              src={card.image}
              alt="Card Image"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App1;