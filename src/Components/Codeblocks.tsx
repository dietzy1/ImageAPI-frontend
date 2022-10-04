import { CopyBlock } from "react-code-blocks";
import { Theme } from "../Config/CustomThemeCodeBlocks";
//import { CopyBlock, sunburst } from "react-code-blocks";

export interface codeblocktype {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  startingLineNumber: number;
  theme?: {};
  highlight?: string;
  codeBlock: boolean;
}

function Codeblocks({
  code,
  startingLineNumber,
  codeBlock,
  showLineNumbers,
  language,
}: codeblocktype) {
  return (
    <div className="font-light font-mono">
      <CopyBlock
        customStyle={{ margin: "10px" }}
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={Theme}
        codeBlock={codeBlock}
      />
    </div>
  );
}

export default Codeblocks;
