import React from "react";
import PortableText from "@sanity/block-content-to-react";

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
  <PortableText blocks={blocks} serializers={serializers} />
);

export default BlockText;
