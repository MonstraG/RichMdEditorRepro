import { NextPage } from "next";
import RichMarkdownEditor from "rich-markdown-editor";

const IndexPage: NextPage = () => {
  return (
    // @ts-ignore
    <RichMarkdownEditor
      onChange={(v: any) => console.log(v())}
    />
  );
};

export default IndexPage;
