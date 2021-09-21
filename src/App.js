import "./styles.css";
import { useState } from "react";
import { ChildAre } from "./ChildArea";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  //ボタンをクリックすると表示が切り替わる処理（デフォルトfalseがtrueに変わる）
  const onClickOpen = () => {
    setOpen(!open);
    // console.log(!open);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />

      <br />
      <br />
      <button onClick={onClickOpen}>ボタン</button>
      <ChildAre open={open} />
    </div>
  );
}
