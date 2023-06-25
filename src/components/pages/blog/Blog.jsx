import React from "react";
import ReactPrint from "react-to-print";
import { useRef } from "react";
import "./Blog.css";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="md:px-36">
      <div className="flex justify-between text-center items-center space-x-8 mt-12">
        <div className=""></div>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <div className="text-center mt-">
          <ReactPrint
            trigger={() => (
              <button className="bg-green-500 px-5 py-2 rounded-sm text-white font-bold">
                Print PDF
              </button>
            )}
            content={() => ref.current}
          />
        </div>
      </div>
      <div className="pdf-print-container">
        <div className="data-contents">
          <div ref={ref} className="printable-data-contents">
            <h1 className="text-center font-bold text-4xl my-10">
              React Js Related Blog Posts
            </h1>
            {/* Blog posts begin */}
            <div className="article-container mb-10">
              <h1 className="text-2xl font-bold mb-5 mt-14 mx-24">
                <span>1) Question: </span> What are the differences between
                controlled and uncontrolled components in React Js ?
              </h1>
              <div className="mx-24">
                <span className="text-2xl font-bold">Answer: </span>
                <p className="indent-10 mb-2 text-justify">
                  In React Js controlled components are controlled by React
                  through props. In other words, the state of the component is
                  stored in the parent component, which is passed down to the
                  controlled component via props. The parent component is
                  responsible for handling the user input and updating the state
                  of the controlled component.
                </p>

                <p className="indent-10 mb-2 text-justify">
                  In short, uncontrolled components are those where state is
                  handled by the DOM itself, rather than by React. In other
                  words, the state of the component is not controlled by React
                  but by the DOM itself. S, uncontrolled components are a bit
                  tedious to manage in coding.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  So, in a nutshell, the main difference between controlled and
                  uncontrolled components is that controlled components are
                  easier to manage and test because their state is controlled by
                  the parent component. They require more code to set up and
                  manage. Uncontrolled components, on the other hand, require
                  less code to set up and manage but are harder to test and
                  debug because their state is controlled by the DOM itself.
                </p>
              </div>
            </div>

            <div className="article-container mb-10">
              <h1 className="text-2xl font-bold mb-5 mt-14 mx-24">
                <span>2) Question:</span> How to validate react props using
                Prototypes ?
              </h1>
              <div className="mx-24">
                <span className="text-2xl font-bold">Answer: </span>
                <p className="indent-10 mb-2 text-justify">
                  In React Js, programmers use PropTypes to validate the props
                  that are passed to a component. PropTypes are a way to specify
                  the expected type and shape of the props that a component
                  should receive in a particular programme. PropTypes provide a
                  way to catch errors early by validating the props during
                  development time. To validate React props using PropTypes, a
                  programmer first needs to import the PropTypes library from
                  the 'prop-types' package.
                </p>

                <p className="indent-10 mb-2 text-justify">
                  Once a programmer has imported the PropTypes library, he/she
                  uses it to specify the type and shape of the props that his or
                  her component expects. Programmers specify the PropTypes of a
                  component by adding a static propTypes object to the component
                  in his or her code base.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  By specifying PropTypes for a component, programmers ensure
                  that the props being passed to the component are of the
                  expected type and shape. If a prop is of an incorrect type or
                  shape is passed to the component, he or she will get a warning
                  in the console during development time of the component. This
                  makes it easier to catch errors early and maintain code
                  quality for a programmer.
                </p>
              </div>
            </div>

            <div className="article-container mb-10">
              <h1 className="text-2xl font-bold mb-5 mt-14 mx-24">
                <span>3) Question:</span> What are the differences between React
                Js and Express Js ?
              </h1>
              <div className="mx-24">
                <span className="text-2xl font-bold">Answer: </span>
                <p className="indent-10 mb-2 text-justify">
                  Actually the purpose of two things are different. One deals
                  with User Interface and the other deals with server related
                  data management. ReactJS is a client-side JavaScript library
                  that is primarily used for building user interfaces. It
                  provides a declarative approach of building UI components that
                  can be easily composed and re-used. ReactJS is typically used
                  in conjunction with other web development technologies such as
                  Redux for state management, React Router for client-side
                  routing, and Axios for making HTTP requests.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  On the other hand, ExpressJS is a server-side JavaScript
                  framework that is used for building web applications and APIs.
                  It provides a lightweight and flexible platform for building
                  web applications using Node.js. ExpressJS is typically used in
                  conjunction with other web development technologies such as
                  MongoDB or MySQL for data storage, Passport for
                  authentication, and Socket.IO for real-time communication.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  In fine, ReactJS and ExpressJS serve different purposes and
                  are used in different parts of the web application stack.
                  ReactJS is primarily used for building user interfaces on the
                  client-side, while ExpressJS is used for building web
                  applications and APIs on the server-side.Express Js deals with
                  data that the UI represents.
                </p>
              </div>
            </div>
            <div className="article-container mb-10">
              <h1 className="text-2xl font-bold mb-5 mt-14 mx-24">
                <span>4) Question:</span> What is a Custom Hook ? Why is it
                created ?
              </h1>
              <div className="mx-24">
                <span className="text-2xl font-bold">Answer: </span>
                <p className="indent-10 mb-2 text-justify">
                  In React Js custom hok plays a very important role Custom
                  hooks are created to solve the problem of code duplication and
                  abstraction of complex logic. When multiple components in your
                  React application need to perform similar tasks, you may find
                  yourself duplicating code across these components. This can
                  lead to code bloat, maintenance issues, and difficulty in
                  updating the logic across multiple components. Custom hooks
                  provide a way to abstract away the common logic and reuse it
                  across multiple components.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  To create a custom hook in React Js , a programmer simply
                  defines a function that performs the reusable coding logic and
                  returns the necessary values from it. The function should
                  start with the word "use" so that React can recognize it as a
                  hook. Here the use of "use" is very important.
                </p>
                <p className="indent-10 mb-2 text-justify">
                  In fine, custom hooks in React Js provides a way to extract
                  and reuse complex coding logic across multiple components in
                  any React application, helping to reduce code duplication,
                  improve maintainability, and increase code reusability in a
                  very efficient way.
                </p>
              </div>
              <h2 className="text-center text-2xl font-bold mt-10">
                {" "}
                ---------- Thanks ----------{" "}
              </h2>
            </div>
            {/* Blog posts end */}
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <ReactPrint
          trigger={() => (
            <button className="bg-green-500 px-5 py-2 rounded-sm text-white font-bold">
              Print PDF
            </button>
          )}
          content={() => ref.current}
        />
      </div>
    </div>
  );
};

export default Blog;
