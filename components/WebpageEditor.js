import { useEffect, useState } from "react";

export default function WebpageEditor({
  html: defaultHTML = "",
  css: defaultCSS = "",
  js: defaultJS = "",
}) {
  const [html, setHTML] = useState(defaultHTML);
  const [css, setCSS] = useState(defaultCSS);
  const [js, setJS] = useState(defaultJS);

  const debounceHTML = useDebounce(html, 500);
  const debounceCSS = useDebounce(css, 500);
  const debounceJS = useDebounce(js, 2000);

  const [pageURL, setPageURL] = useState(null);

  useEffect(() => {
    setPageURL(
      getGeneratedPageURL({
        html: debounceHTML,
        css: debounceCSS,
        js: debounceJS,
      })
    );
  }, [debounceHTML, debounceCSS, debounceJS]);

  return (
    <div className="flex flex-col sm:flex-row items-stretch h-96 sm:h-80 max-h-screen">
      <div className="flex-1 flex flex-col border border-gray-900 rounded-l overflow-hidden">
        {defaultHTML && (
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-center bg-gray-900 p-1 border-b border-gray-700">
              <span className="font-semibold px-1 text-white">HTML</span>
              <button
                className="bg-gray-600 text-white px-2 rounded"
                onClick={() => setHTML(defaultHTML)}
              >
                Reset
              </button>
            </div>
            <textarea
              className="flex-grow px-2 py-1 font-mono resize-none whitespace-pre bg-gray-800 text-white"
              value={html}
              onChange={(event) => {
                setHTML(event.target.value);
              }}
            />
          </div>
        )}
        {defaultCSS && (
          <textarea
            className="flex-grow px-2 py-1 font-mono resize-none"
            value={css}
            onChange={(event) => {
              setCSS(event.target.value);
            }}
          />
        )}
        {defaultJS && (
          <textarea
            className="flex-grow px-2 py-1 font-mono resize-none"
            value={js}
            onChange={(event) => {
              setJS(event.target.value);
            }}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col border border-l-0 rounded-r overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 p-1 border-b">
          <span className="font-semibold px-1 text-gray-900">Preview</span>
          <button
            className="bg-indigo-600 text-white px-2 rounded"
            onClick={() => openInCodepen({ html, css, js })}
          >
            Open in Codepen
          </button>
        </div>
        <iframe src={pageURL} className="flex-grow" />
      </div>
    </div>
  );
}

function getGeneratedPageURL({ html, css, js }) {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        ${js && `<script src="${jsURL}"></script>`}
      </head>
      <body>
        ${html || ""}
      </body>
    </html>
  `;

  return getBlobURL(source, "text/html");
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function openInCodepen(data) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://codepen.io/pen/define";
  form.target = "_blank";

  const hiddenField = document.createElement("input");
  hiddenField.type = "hidden";
  hiddenField.name = "data";
  hiddenField.value = JSON.stringify(data)
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  form.appendChild(hiddenField);

  document.body.appendChild(form);
  form.submit();
}
