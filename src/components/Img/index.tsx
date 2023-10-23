import React from "react";
import Image from "next/image";
import { useHomeMainHeight } from "src/hooks/useHomeMainHeight";

type NextImageProps = Parameters<typeof Image>[0];

export function Img(props: NextImageProps) {
  const homeMainHeight = useHomeMainHeight();
  const loading = homeMainHeight === undefined ? "lazy" : "eager";

  return <Image {...props} alt={props.alt} fill loading={loading} />;
}
