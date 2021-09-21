import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildAre } from "./ChildArea";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  // 変数をメモ化
  const temp = useMemo(() => {}, []);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  //ボタンをクリックすると表示が切り替わる処理（デフォルトfalseがtrueに変わる）
  const onClickOpen = () => {
    setOpen(!open);
    // console.log(!open);
  };

  // メモ化に関数を組み合わせる場合はuseCollbackを使う
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />

      <br />
      <br />
      <button onClick={onClickOpen}>ボタン</button>
      <ChildAre open={open} onClickClose={onClickClose} />
    </div>
  );
}
