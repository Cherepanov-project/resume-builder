// const Html = () => {
//   return <h2 className="text-2xl">HTML код</h2>;
// };

// export default Html;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setHtmlCode } from "../../../reducers/htmlReducer";

const HtmlPreviewer = () => {
  const htmlCode = useSelector((state: RootState) => state.html.htmlCode);
  const dispatch = useDispatch();

  //добавлено изменение в realtime, вместо кнопки on-demand
  const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setHtmlCode(event.target.value));
  };

  return (
    <div className="html-previewer" style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}>
      <div>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>HTML код</h2>
        <textarea
          value={htmlCode}
          onChange={handleHtmlChange}
          placeholder="<div>Ваш HTML код!</div>"
          style={{
            width: "100%",
            height: "150px",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            resize: "vertical",
            backgroundColor: "transparent",
          }}
        ></textarea>
      </div>

      <div>
        <div
          className="html-preview"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            marginBottom: "10px",
            minHeight: "50px",
          }}
          dangerouslySetInnerHTML={{ __html: htmlCode }}
        ></div>
      </div>

      <div>
        <h3>Только HTML эксперты</h3>

        <p>
          Использование собственного кода может привести к нарушениям в отображении письма.
          Используйте валидный и адаптивный HTML.
        </p>
      </div>
    </div>
  );
};

export default HtmlPreviewer;
