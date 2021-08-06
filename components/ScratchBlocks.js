import scratchblocks from "scratchblocks";
import { useEffect, useRef } from "react";

export default function ScratchBlocks({
  blockStyle,
  languages,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    let options = {};
    if (blockStyle !== undefined) options.style = blockStyle;
    if (languages !== undefined) options.languages = languages;

    const doc = scratchblocks.parse(children, options);
    const svg = scratchblocks.render(doc, options);

    ref.current.innerHTML = "";
    ref.current.appendChild(svg);
  }, [blockStyle, languages, children]);

  return <div ref={ref} {...props} />;
}
