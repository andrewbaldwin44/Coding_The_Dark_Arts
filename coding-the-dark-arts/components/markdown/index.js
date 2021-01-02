import React from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
  const renderers = {
    orderedList: ({ children }) => <ol className="m-markdown-ol">{children}</ol>,
    unorderedList: ({ children }) => <ul className="m-markdown-ul">{children}</ul>,
    listItem: ({ children }) => <li className="m-markdown-li">{children}</li>,
    headerOne: ({ children }) => <h1 className="m-markdown-h1">{children}</h1>,
    headerTwo: ({ children }) => <h2 className="m-markdown-h2">{children}</h2>,
    headerThree: ({ children }) => <h3 className="m-markdown-h3">{children}</h3>,
    headerFour: ({ children }) => <h4 className="m-markdown-h4">{children}</h4>,
    headerFive: ({ children }) => <h5 className="m-markdown-h5">{children}</h5>,
    headerSix: ({ children }) => <h6 className="m-markdown-h6">{children}</h6>,
    paragraph: ({ children }) => <p className="m-markdown-p">{children}</p>,
    span: ({ children }) => <span className="m-markdown-span">{children}</span>,
    // code: ({ children }) => <code className="m-markdown-code">{children}</code>,
    anchor: ({ children }) => <a className="m-markdown-a">{children}</a>,
    div: ({ children }) => <div className="m-markdown-div">{children}</div>,

  };

  return (
    <>
      <ReactMarkdown renderers={renderers} children={children} />
    </>
  );
}
