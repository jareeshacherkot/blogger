import React from "react";

const Learnreact = () => {
  return (
    <div>
      <h1 style={{color:"blue",backgroundColor:"pink"}} >LEARNING REACT</h1>
      <h3 style={{color:"black"}} >
        "React" can refer to the general English verb or, more commonly in a
        technical context, to the JavaScript library.
      </h3>
      <h4 style={{color:"black"}} >
         Virtual DOM: React uses an in-memory virtual representation of the
        Document Object Model (DOM). When data changes, React calculates the
        minimal number of updates needed and applies only those changes to the
        actual DOM, which optimizes performance and ensures faster rendering.
      </h4>
      <h4 style={{color:"black"}} >
        Declarative Syntax: Developers describe what the UI should look like for
        each state, and React handles the logic to update the screen to match
        the new data. This makes the code more predictable and easier to debug.
      </h4>
      <h4 style={{color:"black"}} >
        JSX (JavaScript XML): A syntax extension for JavaScript that looks
        similar to HTML markup and is used to describe the UI within the
        JavaScript code.
      </h4>
      <h4 style={{color:"black"}} >
        Unidirectional Data Flow: Data primarily flows in a single direction
        (from parent components to child components via "props"), making data
        changes predictable and easier to trace.
      </h4>
    </div>
  );
};

export default Learnreact;
