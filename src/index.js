import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // returnの中にhtmlを書く
    // <></>の間に書く
    // コンポーネントで分割するのが基本
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
