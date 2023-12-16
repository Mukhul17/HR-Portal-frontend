import React, { useState, useEffect, useRef } from "react";
import Chatbot from "react-simple-chatbot";
import { Segment, Button, Image as SemanticImage } from "semantic-ui-react";
import "./ChatBot.css";

import Image from "./HR welcome logo.png";

function ChatBot() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [answeredQuery, setAnsweredQuery] = useState(null);
  const chatbotRef = useRef();

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our HR Portal Support",
      trigger: "Done",
      avatarSrc: Image,
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "1",
          label: "What are the skills required?",
          trigger: "Q1",
        },
        {
          value: "2",
          label: "What is the average salary?",
          trigger: "Q2",
        },
        {
          value: "3",
          label: "Which job role has the most number of vacancies?",
          trigger: "Q3",
        },
        {
          value: "4",
          label: "What is the selection ratio?",
          trigger: "Q4",
        },
        {
          value: "5",
          label: "Which job has the highest demand in the industry?",
          trigger: "Q5",
        },
        {
          value: "6",
          label: "Which role offers the highest average salary?",
          trigger: "Q6",
        },
        {
          value: "7",
          label: "What are the minimum experience required?",
          trigger: "Q7",
        },
        {
          value: "8",
          label: "Which jobs are offered by company?",
          trigger: "Q8",
        },
        {
          value: "9",
          label: "What is the job deadline?",
          trigger: "Q9",
        },
        {
          value: "no",
          label: "No, I don't have more queries",
          trigger: "Done",
        },
      ],
    },
    {
      id: "Q1",
      options: [
        {
          value: "Software Developer",
          label: "Software Developer",
          trigger: "a1",
        },
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "b1",
        },
        {
          value: "Data Analyst",
          label: "Data Analyst",
          trigger: "c1",
        },
        {
          value: "Data Scientist",
          label: "Data Scientist",
          trigger: "d1",
        },
        {
          value: "Algorithm Developer",
          label: "Algorithm Developer",
          trigger: "e1",
        },
        {
          value: "Systems Engineer",
          label: "Systems Engineer",
          trigger: "f1",
        },
        {
          value: "Data and Applied Scientist",
          label: "Data and Applied Scientist",
          trigger: "g1",
        },
        {
          value: "Backend Developer",
          label: "Backend Developer",
          trigger: "h1",
        },
      ],
    },
    {
      id: "Q3",
      message: "Systems Engineer",
      trigger: "MoreQueries",
    },
    {
      id: "Q2",
      options: [
        {
          value: "Software Developer",
          label: "Software Developer",
          trigger: "a2",
        },
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "b2",
        },
        {
          value: "Data Analyst",
          label: "Data Analyst",
          trigger: "c2",
        },
        {
          value: "Data Scientist",
          label: "Data Scientist",
          trigger: "d2",
        },
        {
          value: "Algorithm Developer",
          label: "Algorithm Developer",
          trigger: "e2",
        },
        {
          value: "Systems Engineer",
          label: "Systems Engineer",
          trigger: "f2",
        },
        {
          value: "Data and Applied Scientist",
          label: "Data and Applied Scientist",
          trigger: "g2",
        },
        {
          value: "Backend Developer",
          label: "Backend Developer",
          trigger: "h2",
        },
      ],
    },
    {
      id: "Q4",
      options: [
        {
          value: "Software Developer",
          label: "Software Developer",
          trigger: "a4",
        },
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "b4",
        },
        {
          value: "Data Analyst",
          label: "Data Analyst",
          trigger: "c4",
        },
        {
          value: "Data Scientist",
          label: "Data Scientist",
          trigger: "d4",
        },
        {
          value: "Algorithm Developer",
          label: "Algorithm Developer",
          trigger: "e4",
        },
        {
          value: "Systems Engineer",
          label: "Systems Engineer",
          trigger: "f4",
        },
        {
          value: "Data and Applied Scientist",
          label: "Data and Applied Scientist",
          trigger: "g4",
        },
        {
          value: "Backend Developer",
          label: "Backend Developer",
          trigger: "h4",
        },
      ],
    },
    {
      id: "Q5",
      message: "Software developer",
      trigger: "MoreQueries",
    },
    {
      id: "Q6",
      message: "Data and Applied Scientist",
      trigger: "MoreQueries",
    },
    {
      id: "Q7",
      options: [
        {
          value: "Software Developer",
          label: "Software Developer",
          trigger: "a7",
        },
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "b7",
        },
        {
          value: "Data Analyst",
          label: "Data Analyst",
          trigger: "c7",
        },
        {
          value: "Data Scientist",
          label: "Data Scientist",
          trigger: "d7",
        },
        {
          value: "Algorithm Developer",
          label: "Algorithm Developer",
          trigger: "e7",
        },
        {
          value: "Systems Engineer",
          label: "Systems Engineer",
          trigger: "f7",
        },
        {
          value: "Data and Applied Scientist",
          label: "Data and Applied Scientist",
          trigger: "g7",
        },
        {
          value: "Backend Developer",
          label: "Backend Developer",
          trigger: "h7",
        },
      ],
    },
    {
      id: "Q8",
      options: [
        {
          value: "Microsoft",
          label: "Microsoft",
          trigger: "a8",
        },
        {
          value: "Amazon",
          label: "Amazon",
          trigger: "b8",
        },
        {
          value: "Infosys",
          label: "Infosys",
          trigger: "c8",
        },
        {
          value: "TCS",
          label: "TCS",
          trigger: "d8",
        },
        {
          value: "Cognizant",
          label: "Cognizant",
          trigger: "e8",
        },
        {
          value: "Delloitte",
          label: "Delloitte",
          trigger: "f8",
        },
        {
          value: "ServiceNow",
          label: "ServiceNow",
          trigger: "g8",
        },
        {
          value: "Cisco",
          label: "Cisco",
          trigger: "h8",
        },
        {
          value: "Netflix",
          label: "Netflix",
          trigger: "i8",
        },
        {
          value: "Texas",
          label: "Texas",
          trigger: "j8",
        },
        {
          value: "Google",
          label: "Google",
          trigger: "k8",
        },
      ],
    },
    {
      id: "Q9",
      options: [
        {
          value: "Software Developer",
          label: "Software Developer",
          trigger: "a9",
        },
        {
          value: "Frontend Developer",
          label: "Frontend Developer",
          trigger: "b9",
        },
        {
          value: "Data Analyst",
          label: "Data Analyst",
          trigger: "c9",
        },
        {
          value: "Data Scientist",
          label: "Data Scientist",
          trigger: "d9",
        },
        {
          value: "Algorithm Developer",
          label: "Algorithm Developer",
          trigger: "e9",
        },
        {
          value: "Systems Engineer",
          label: "Systems Engineer",
          trigger: "f9",
        },
        {
          value: "Data and Applied Scientist",
          label: "Data and Applied Scientist",
          trigger: "g9",
        },
        {
          value: "Backend Developer",
          label: "Backend Developer",
          trigger: "h9",
        },
      ],
    },
    {
      id: "a1",
      message: "C, C++, Java, Python, DSA,CS Fundamentals",
      trigger: "MoreQueries",
    },
    {
      id: "b1",
      message: "HTML, CSS, JavaScript, Github",
      trigger: "MoreQueries",
    },
    {
      id: "c1",
      message: "Python, R, SQL ,Machine Learning",
      trigger: "MoreQueries",
    },
    {
      id: "d1",
      message: "Python, R, SQL,Machine Learning",
      trigger: "MoreQueries",
    },
    {
      id: "e1",
      message: "Python, C ,C++, Java, DSA",
      trigger: "MoreQueries",
    },
    {
      id: "f1",
      message: "Cloud Computing, Embedded Systems, DSA",
      trigger: "MoreQueries",
    },
    {
      id: "g1",
      message: "Python, R, Machine Learning, NLP, Math",
      trigger: "MoreQueries",
    },
    {
      id: "h1",
      message: "NodeJS, ExpressJS, Github",
      trigger: "MoreQueries",
    },
    {
      id: "a2",
      message: "1,00,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "b2",
      message: "50,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "c2",
      message: "70,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "d2",
      message: "1,00,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "e2",
      message: "50,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "f2",
      message: "50,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "g2",
      message: "1,50,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "h2",
      message: "50,000 per month",
      trigger: "MoreQueries",
    },
    {
      id: "a4",
      message: "1:10",
      trigger: "MoreQueries",
    },
    {
      id: "b4",
      message: "1:4",
      trigger: "MoreQueries",
    },
    {
      id: "c4",
      message: "1:5",
      trigger: "MoreQueries",
    },
    {
      id: "d4",
      message: "1:10",
      trigger: "MoreQueries",
    },
    {
      id: "e4",
      message: "1:3",
      trigger: "MoreQueries",
    },
    {
      id: "f4",
      message: "1:3",
      trigger: "MoreQueries",
    },
    {
      id: "g4",
      message: "1:15",
      trigger: "MoreQueries",
    },
    {
      id: "h4",
      message: "1:4",
      trigger: "MoreQueries",
    },
    {
      id: "a7",
      message: "0 Years",
      trigger: "MoreQueries",
    },
    {
      id: "b7",
      message: "1 Year",
      trigger: "MoreQueries",
    },
    {
      id: "c7",
      message: "0 Years",
      trigger: "MoreQueries",
    },
    {
      id: "d7",
      message: "1 Year",
      trigger: "MoreQueries",
    },
    {
      id: "e7",
      message: "0 Years",
      trigger: "MoreQueries",
    },
    {
      id: "f7",
      message: "0 Years",
      trigger: "MoreQueries",
    },
    {
      id: "g7",
      message: "2 Years",
      trigger: "MoreQueries",
    },
    {
      id: "h7",
      message: "1 Year",
      trigger: "MoreQueries",
    },
    {
      id: "a8",
      message: "Software Developer, Data Scientist, Data and Applied Scientist",
      trigger: "MoreQueries",
    },
    {
      id: "b8",
      message: "Software Developer, Data Analyst, Data Scientist",
      trigger: "MoreQueries",
    },
    {
      id: "c8",
      message: "Software Developer, Frontend Developer, Backend Developer",
      trigger: "MoreQueries",
    },
    {
      id: "d8",
      message: "Software Developer, Frontend Developer, Backend Developer",
      trigger: "MoreQueries",
    },
    {
      id: "e8",
      message: "Software Developer, Frontend Developer, Backend Developer",
      trigger: "MoreQueries",
    },
    {
      id: "f8",
      message: "Data Analyst",
      trigger: "MoreQueries",
    },
    {
      id: "g8",
      message: "Algorithm Developer",
      trigger: "MoreQueries",
    },
    {
      id: "h8",
      message: "Algorithm Developer, Systems Engineer",
      trigger: "MoreQueries",
    },
    {
      id: "i8",
      message: "Algorithm Developer",
      trigger: "MoreQueries",
    },
    {
      id: "j8",
      message: "Systems Engineer",
      trigger: "MoreQueries",
    },
    {
      id: "k8",
      message: "Data and Applied Scientist",
      trigger: "MoreQueries",
    },
    {
      id: "a9",
      message: "31/12/2023",
      trigger: "MoreQueries",
    },
    {
      id: "b9",
      message: "31/12/2023",
      trigger: "MoreQueries",
    },
    {
      id: "c9",
      message: "15/1/2024",
      trigger: "MoreQueries",
    },
    {
      id: "d9",
      message: "1/2/2024",
      trigger: "MoreQueries",
    },
    {
      id: "e9",
      message: "18/1/2024",
      trigger: "MoreQueries",
    },
    {
      id: "f9",
      message: "22/1/2024",
      trigger: "MoreQueries",
    },
    {
      id: "g9",
      message: "31/3/2024",
      trigger: "MoreQueries",
    },
    {
      id: "h9",
      message: "31/12/2023",
      trigger: "MoreQueries",
    },
    {
      id: "MoreQueries",
      message: "Do you have any more queries?",
      trigger: "MoreQueriesOptions",
    },
    {
      id: "MoreQueriesOptions",
      options: [
        { value: "yes", label: "Yes", trigger: "issues" },
        {
          value: "no",
          label: "No, I don't have more queries",
          trigger: "Done1",
        },
      ],
    },
    {
      id: "Done1",
      message: "Thank you for using HR Portal Support. Have a great day!",
      end: true,
    },
  ];
  const openChatbot = () => {
    setShowChatbot(true);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  const handleButtonClick = () => {
    if (showChatbot) {
      closeChatbot();
    } else {
      openChatbot();
    }
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      closeChatbot();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Adding an empty dependency array to run the effect only once

  return (
    <>
      <div
        style={{ position: "fixed", top: "70px", right: "30px", zIndex: "9" }}
      >
        {showChatbot ? (
          <Segment ref={chatbotRef} floated="right">
            <Chatbot steps={steps} headerTitle="HR Portal Support" />
            <div>
              <SemanticImage
                onClick={closeChatbot}
                src="https://www.franchise.city/images/cat_icons/personnel.png"
                avatar
                style={{
                  width: "50px",
                  height: "50px",
                  marginTop: "10px",
                  background: "transparent",
                }}
              />
              <div style={{ marginLeft: "3px" }}>Close</div>
            </div>
          </Segment>
        ) : (
          <div>
            <center>
              <SemanticImage
                onClick={handleButtonClick}
                src="https://www.franchise.city/images/cat_icons/personnel.png"
                avatar
                style={{
                  width: "50px",
                  height: "50px",
                  background: "transparent",
                }}
              />
            </center>
            <div style={{ marginLeft: "5px" }}>
              {showChatbot ? "Close" : "Chat Support"}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatBot;
