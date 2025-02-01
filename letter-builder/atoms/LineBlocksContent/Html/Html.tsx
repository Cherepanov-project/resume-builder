import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setHtmlCode } from "../../../reducers/htmlReducer";

const HtmlPreviewer = () => {
  const htmlCode = useSelector((state: RootState) => state.html.htmlCode);
  const dispatch = useDispatch();
  const [isHtmlEditorClosed, setIsHtmlEditorClosed] = useState(true);

  const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setHtmlCode(event.target.value));
  };

  const lines = htmlCode.split("\n");

  return (
    <div className="html-previewer" style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}>
      {!isHtmlEditorClosed && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Ваш HTML код</h2>
          <div style={{ display: "flex", border: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#e0e0e0",
                textAlign: "right",
                fontFamily: "monospace",
                minWidth: "40px",
                userSelect: "none",
              }}
            >
              {lines.map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
            <textarea
              value={htmlCode}
              onChange={handleHtmlChange}
              placeholder="<div> Я новый HTML блок.</div>"
              style={{
                flex: 1,
                padding: "10px",
                fontSize: "14px",
                fontFamily: "monospace",
                border: "none",
                outline: "none",
                resize: "none",
                minHeight: "150px",
                backgroundColor: "transparent",
              }}
            />
          </div>
          <div style={{ fontSize: "10px", backgroundColor: "transparent", textAlign: "left" }}>
            <h3 style={{ fontWeight: "bold" }}>Только HTML эксперты</h3>
            <p>
              Использование собственного кода может привести к нарушениям в отображении письма.
              Используйте валидный и адаптивный HTML.
            </p>
          </div>
          <button
            onClick={() => setIsHtmlEditorClosed(!isHtmlEditorClosed)}
            style={{
              display: "block",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
              color: "#000",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Скрыть редактор
          </button>
        </>
      )}

      <div
        className="html-preview"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          marginTop: "10px",
          minHeight: "50px",
        }}
        onClick={() => setIsHtmlEditorClosed(false)}
        dangerouslySetInnerHTML={{ __html: htmlCode }}
      />
    </div>
  );
};

export default HtmlPreviewer;
