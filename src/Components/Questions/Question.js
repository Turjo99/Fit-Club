import React from 'react';
import("../Questions/Question.css")

const Question = () => {
    return (
        <div className='questions'>
            <div className="ques">
            <h1>How does react work?</h1>
            <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>

            <div className="ques">
                <h1>What is the difference bwtween props and state?</h1>
                <p>
                Components receive data from outside with props, whereas they can create and manage their own data with state
                Props are used to pass data, whereas state is for managing data.
                Data from props is read-only, and cannot be modified by a component that is receiving it from outside.
                State data can be modified by its own component, but is private (cannot be accessed from outside).
                Props can only be passed from parent component to child (unidirectional flow).
                Modifying state should happen with the setState ( ) method.

                </p>
            </div>
            <div className="ques">
                <h1>What is the work of useState?</h1>
                <p>We can use the useState in various purposes such as </p>
                <li>State Management</li>
                <li>Conditional rendering</li>
                <li>Toggle flags</li>
                <li>Counter</li>
                <li>Get API data and store it in state</li>
            </div>
           
        </div>
    );
};

export default Question;