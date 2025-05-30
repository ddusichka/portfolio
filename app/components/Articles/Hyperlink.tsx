import Link from "next/link";
import React from "react";

export interface HyperlinkProps {
  href: string;
  text: string;
}

const Hyperlink = ({ href, text }: HyperlinkProps) => {
  return (
    <Link href={href} className="text-purple-600">
      {" "}
      {text}{" "}
    </Link>
  );
};

export default Hyperlink;
