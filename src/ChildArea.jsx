const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildAre = (props) => {
  const { open } = props;
  return (
    <>
      {/* {open? (): ()} trueであれば左をレンダリング、falseであれば右をレンダリング */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
