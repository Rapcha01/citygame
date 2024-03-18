// export default function UseonClickOutsideHook
// return div
// setshowcontent
import { useRef, useState } from "react";
import useOutsideClick from "./test";

export default function UseonClickOutsideHook() {
  const [showContent, setShowContent] = useState(false);
const ref = useRef();
useOutsideClick( ref, ()=> setShowContent(false));

  return (
    <div  >
      {showContent ? (
        <div ref={ref} style ={{alignItems: "center", 
    justifyContent: "center"}}>
          <h1>This is random content</h1>
          <p>
            This is random text. click outside to see the effect of onClick
            outside. If you don't you we not experience
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
