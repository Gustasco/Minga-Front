import React from "react";
import { useSelector } from "react-redux";
import { Link as Anchor } from "react-router-dom";

const ComicsCards = ({ showButtons, handleDelete, handleUpdate }) => {
  const { comics } = useSelector((store) => store.comics);
  console.log({comics})
  console.log(comics);

  return (
    <>
      {comics?.map((card, index) => {
        return (
          <div key={index} className="card">
            <div className="textoCard">
              <h2 className="tituloCard">{card.title}</h2>
              {
                showButtons ? (
                  <div className="edit-delete">
                    <button className="edit-comic" onClick={()=>handleUpdate(card._id)}>Edit</button>
                    <button className="delete-comic" onClick={()=>handleDelete(card._id)}>Delete</button>
                  </div>
                ) : ''
              }
            </div>

            <Anchor to={`/comic/${card._id}`} className="divCardImg">
              <img className="cardIMG" src={card.cover_photo} alt="" />
            </Anchor>
          </div>
        );
      })}
    </>
  );
};
export default ComicsCards;
