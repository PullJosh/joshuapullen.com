import { useEffect, useState } from "react";

export default function WebpageEditor({
  html: defaultHTML = "",
  css: defaultCSS = "",
  js: defaultJS = "",
}) {
  const [html, setHTML] = useState(defaultHTML);
  const [css, setCSS] = useState(defaultCSS);
  const [js, setJS] = useState(defaultJS);

  const debounceHTML = useDebounce(html, 1000);
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
    <div className="flex flex-col sm:flex-row items-stretch h-96 sm:h-80 max-h-screen border rounded overflow-hidden divide-y sm:divide-y-0 sm:divide-x">
      <div className="flex-1 flex flex-col">
        {defaultHTML && (
          <div className="flex flex-col flex-grow">
            <div className="bg-gray-100 px-2 py-1 font-semibold border-b">
              HTML
            </div>
            <textarea
              className="flex-grow px-2 py-1 font-mono resize-none whitespace-pre"
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
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-100 px-2 py-1 font-semibold border-b">
          Preview
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
