import React from "react";
import Button from "react-bootstrap/cjs/Button";
import { urlEncode } from "../assets/helpers/utilities";

const List = ({
  mps,
  dataUser,
  setEmailData,
  setShowFindForm,
  setShowEmailForm,
  tweet,
}) => {
  const decoder = urlEncode(tweet);
  const tweetText = `.${mps.twitter} ${decoder}`;
  const click = (e) => {
    e.preventDefault();
    setEmailData({
      ...dataUser,
      ...mps,
    });
    setShowEmailForm(false);
    setShowFindForm(true);
  };
  return (
    <div className={"buttonsContainer"}>
      <div className={"list-content-location"}>
        <div>
          <h3 className="capitalize-style">
            {" "}
            {mps.name ? mps.name : null} {mps.lastName ? mps.lastName : null}{" "}
          </h3>
          <p>
            Estado: {mps.state ? mps.state : " ---"}, Fracción:{" "}
            {mps.party ? mps.party : " ---"}
          </p>
        </div>
      </div>
      <div className={"buttons"}>
        <div>
          {mps.twitter && mps.clientId?.plan !== "basic" ? (
            <Button
              id="tweet-listView"
              className="list-button"
              size={"sm"}
              variant={"dark"}
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target={"blank"}
            >
              Enviar tweet
            </Button>
          ) : (
            <p className="list-notweeter-text">No hay Twitter</p>
          )}
        </div>
        <div>
          {mps.contact || mps.email ? (
            <Button
              id="email-listView"
              className="list-button"
              size={"sm"}
              variant={"dark"}
              target={"blank"}
              onClick={click}
            >
              Enviar email
            </Button>
          ) : (
            <p className="list-notweeter-text">No hay Email</p>
          )}
        </div>
        <div>
          {mps.phone && mps.clientId?.plan !== "basic" ? (
            <Button
              id="call-listView"
              className="list-button"
              size={"sm"}
              variant={"dark"}
              href={`tel:${mps.phone}`}
              target={"blank"}
            >
              Llamada
            </Button>
          ) : (
            <p className="list-notweeter-text">No hay telefono</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default List;
