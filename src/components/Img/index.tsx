
import Image from "next/image";
import { useMainSectionHeight } from "src/hooks/useMainSectionHeight";

type NextImageProps = Parameters<typeof Image>[0];

export function Img(props: NextImageProps) {
  const mainSectionHeight = useMainSectionHeight();
  const loading = mainSectionHeight === undefined ? "lazy" : "eager";

  return <Image {...props} alt={props.alt} fill loading={loading} />;
}
