import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/cjs/Button";
import { fetchAllLeads } from "../assets/petitions/fetchLeads";
import Share from "./Share";
const ThankYou = ({
  setLeads,
  showThankYou,
  setShowFindForm,
  setShowThankYou,
  typData,
  backendURLBase,
  endpoints,
  clientId,
}) => {
  const loadProgressbar = async () => {
    await fetchAllLeads(
      "GET",
      backendURLBase,
      endpoints.toGetAllLeads,
      clientId,
      setLeads
    ).catch((error) => console.log("error", error));
  };
  const click = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setShowFindForm(false);
  };
  return (
    <div
      onLoad={loadProgressbar()}
      hidden={showThankYou}
      className={"container typ-container"}
    >
      <form name="fm-tym" onSubmit={click}>
        <div className="typ-content">
          <h3>
            {typData.data?.docs[0]
              ? typData.data?.docs[0].thankYouMessage
              : typData.thankYouMessage}
          </h3>
          <h5>
            {typData.data?.docs[0]
              ? typData.data?.docs[0].secondThankYouMessage
              : typData.secondThankYouMessage}
          </h5>
          <Button
            id="repeatButton-typView"
            type={"submit"}
            onClick={click}
            variant={"dark"}
            className="capitalize-style"
          >
            {typData.data?.docs[0]
              ? typData.data?.docs[0].repeatButtonTyp
              : typData.repeatButtonTyp}
          </Button>
          <h5>
            {typData.data?.docs[0]
              ? typData.data?.docs[0].shareText
              : typData.shareText}
          </h5>
          <Share url="https://app04social.vercel.app/" />
        </div>
      </form>
    </div>
  );
};

export default ThankYou;
