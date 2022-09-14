import { CopyBlock, hybrid } from "react-code-blocks";

export interface codeblocktype {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  startingLineNumber: number;
  theme?: {};
  highlight?: string;
  codeBlock: boolean;
}

function Codeblocks({ code, startingLineNumber, codeBlock }: codeblocktype) {
  return (
    <div className="font-light">
      <CopyBlock
        text={code}
        language={"ts"}
        showLineNumbers={true}
        startingLineNumber={startingLineNumber}
        theme={hybrid}
        codeBlock={codeBlock}
      />
    </div>
  );
}

export default Codeblocks;
