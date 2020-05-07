import React from "react";

function Question({question , answer}) {
  let firstRef = React.createRef();
  function toggleNav(e) {
    e.target.classList.toggle("qactive");
    firstRef.current.classList.toggle("content-active");
  }

  return (
    <div>
      <button type="button" className="collapsible" onClick={toggleNav}>
        {question}
      </button>
      <div className="content" onClick={toggleNav} ref={firstRef}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
