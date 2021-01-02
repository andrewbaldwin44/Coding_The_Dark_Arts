import React from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
  const renderers = {
    listItem: ({ children }) => <li className="m-markdown-li">{children}</li>,
  };

  return (
    <>
      <ReactMarkdown renderers={renderers} children={children} />
    </>
  );
}
