import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null); //null means on refresh no number is selected n nothing is open yet

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          key={index}
          num={index}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        setCurOpen={setCurOpen}
        key={3}
        num={3}
        title={"TEST-1"}
      >
        <ul>
          <li>Does the content show?</li>
          <li>Does it break?</li>
          <li>Does the children prop work?</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num); //if u select a num that is the currently open one then we set it to null so that no num is selected ,to close it .
    //else we open the num we clicked on
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
