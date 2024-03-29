import React from 'react';

const Output = (props) => {
  const { paragraphs, tag, includeHTML } = props;

  return (
    <div className="output">
      {includeHTML === "Yes" ? (
        <p>{paragraphs.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
      ) : (
        <p>{paragraphs.map(sentence => sentence)}</p>
      )}
    </div>
  );
}


export default Output;