import React from "react";
import Question from "./question";

function FAQ() {
  let data = [
    {
      id: 1,
      question: "What is ‘Aarogya Setu’?",
      answer: `On 2 April, the Central government launched the Aarogya Setu app for Android and Apple smartphones. The app is meant to be a ‘contact tracing’ tool – ie, it is meant to help determine if you have come in contact with someone “who could have tested COVID-19 positive”.

When you download the app, you need to say whether you have recently travelled, and whether you’ve been in contact with someone who might have contracted the virus. Once you’ve done that and been given your unique ID, the app will keep a log of all the other people you’ve been in contact with who had the app on their phone, using Bluetooth and location data (the app recommends these have to be kept on at all times to function).

If anyone who has the app tests positive for COVID-19, then the app will inform anyone who has been in contact with them as per its logs, and the information of who have been in contact with the infected person, can be used by the government for targeted testing and quarantine measures.
    "},
    {id: 2,question: "What information does my e-pass contain?" , answer:"Your e-pass contains all the basic information about you, your company, supply chain partner e-pass valid till date, location and nature of work.`,
    },

    {
      id: 3,
      question: `Is it mandatory to download the Aarogya Setu app at this time?`,
      answer: `At this point of time, there is no directive or order from the Government of India which says that the general public has to download the app.

    PM Modi’s speech and the MHA’s order only encourage people to download the app, they do NOT make it mandatory to do so.`,
    },

    {
      id: 4,
      question: "What information does my e-pass contain?",
      answer:
        "Your e-pass contains all the basic information about you, your company, supply chain partner e-pass valid till date, location and nature of work.",
    },

    {
      id: 5,
      question: "What about government employees?",
      answer: `While the Centre has not made it mandatory for the general public, all central government employees have been instructed to download and install the app, as per an office memorandum from the Ministry of Personnel, Public Grievances and Pensions dated 29 April.

    In addition to the staff working in the central government itself, the order also notes that Ministries/Departments are to issue similar instructions to autonomous/statutory bodies and PSUs attached to them.
    
    Earlier, only some government and PSU personnel were being made to compulsorily download the app, including Prasar Bharati (DD and AIR) staff and Central Armed Police Forces (CRPF, BSF, etc) personnel.`,
    },
    {
      id: 6,
      question: `What is my e-pass number?`,
      answer: `The 6 digit unique alphanumeric ID mentioned on the e-pass is the e-pass number.`,
    },
    {
      id: 7,
      question: "Is my e-pass valid at any location?",
      answer: `No. It is only valid in the Valid Location as mentioned in the e-pass.`,
    },
    {
      id: 8,
      question: `Who is the issuing authority of my e-pass?`,
      answer:
        "Every e-pass have the state government logo ar the top which is the issuing authority of the e-pass.",
    },
    {
      id: 9,
      question: "Is my e-pass valid with any Government issued ID?",
      answer:
        "Yes. Your e-pass is valid on-ground only with the possession of any government issued ID like Aadhar Card, Voter ID Card, Driving License and Pan Card",
    },
  ];

  let questionArr = data.map((pair) => (
    <Question key={pair.id} question={pair.question} answer={pair.answer} />
  ));
  return (
    <section className=" container">
      {" "}
      <div className="faq">
        <p className="table-heading">Frequently Asked Questions</p>
        <hr />
        {questionArr}
        <hr />
        <p className="table-heading">STAY HOME, STAY SAFE</p>
      </div>{" "}
    </section>
  );
}

export default FAQ;
