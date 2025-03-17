import { FormEvent, useState } from "react";
import Image from "next/image";

function Home() {
  const [radioValue, setRadioValue] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consenting, setConsenting] = useState<boolean>(false);
  const [Submit, setSubmit] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  function OnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmit(true);
    if (
      radioValue !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      message !== "" &&
      consenting !== false &&
      Submit !== false
    ) {
      if (email.includes("@")) {
        setSuccess(true);
      } else {
        setSuccess(false)
      }
    } else {
      setSuccess(false)
    }
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={OnSubmit}>
        <div className="name">
          <div className="first_name">
            <label htmlFor="first_name">
              First Name <span className="star">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {Submit && (
              <p
                className="errormessage"
                style={
                  firstName === "" ? { display: "block" } : { display: "none" }
                }
              >
                This Field Is Required
              </p>
            )}
          </div>
          <div className="last_name">
            <label htmlFor="last_name">
              Last Name <span className="star">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {Submit && (
              <p
                className="errormessage"
                style={
                  lastName === "" ? { display: "block" } : { display: "none" }
                }
              >
                This Field Is Required
              </p>
            )}
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">
            Email Address <span className="star">*</span>
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {Submit && (
            <p
              className="errormessage"
              style={
                email === "" || !email.includes("@")
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              Please Enter A Valid Email Address
            </p>
          )}
        </div>
        <div className="radio">
          <p className="p">
            Query Type <span className="star">*</span>
          </p>
          <div>
            <div
              className={
                radioValue === "General" ? "radio_1 active" : "radio_1"
              }
            >
              <input
                type="radio"
                id="radio_1"
                name="query"
                onClick={() => setRadioValue("General")}
              />
              <div></div>
              <label htmlFor="radio_1">General Enquiry</label>
            </div>
            <div
              className={
                radioValue === "Support" ? "radio_2 active" : "radio_2"
              }
            >
              <input
                type="radio"
                id="radio_2"
                name="query"
                onClick={() => setRadioValue("Support")}
              />
              <div></div>
              <label htmlFor="radio_2">Support Request</label>
            </div>
          </div>
          {Submit && (
            <p
              className="errormessage"
              style={
                radioValue === "" ? { display: "block" } : { display: "none" }
              }
            >
              Please Select A Qurey Type
            </p>
          )}
        </div>
        <div className="message">
          <label htmlFor="message">
            Message <span className="star">*</span>
          </label>
          <textarea
            className="textarea"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {Submit && (
            <p
              className="errormessage"
              style={
                message === "" ? { display: "block" } : { display: "none" }
              }
            >
              This Field Is Required
            </p>
          )}
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => setConsenting(!consenting)}
          />
          <div
            className={consenting === true ? "checked" : "unchecked"}
            onClick={() => setConsenting(!consenting)}
          ></div>
          <label htmlFor="checkbox">
            I consent to being contacted by the team
          </label>
        </div>
        {Submit && (
          <p
            className="errormessage"
            style={
              consenting === true ? { display: "none" } : { display: "block" }
            }
          >
            To Submit This Form, Please consent To being Contacted
          </p>
        )}
        <button className="button">Submit</button>
      </form>
      <div
        className="success"
        style={success === true ? { display: "block" } : { display: "none" }}
      >
        <h3>
          <Image
            src="/images/icon-success-check.svg"
            alt="Success Icon"
            width={20}
            height={20}
          />
          Message Sent!
        </h3>
        <p>Thanks For Completing the Form. we&apos;ll be in touch soon!</p>
      </div>
    </div>
  );
}

export default Home;
