import BaseBlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    block(props: any) {
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>;
      }
    }
  }
};
const BlockText = ({ blocks }: any) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockText;
