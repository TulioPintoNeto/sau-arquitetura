import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export const useHomeMainHeight = () => {
  const router = useRouter();
  const { isTestPurpose, homeMainHeight: homeMainHeightParam } = router.query;

  const shouldSetHeight = (
    queryParam: string | string[] | undefined
  ): queryParam is string =>
    isTestPurpose === "true" && Boolean(queryParam) && !Array.isArray(queryParam);

  const homeMainHeight = shouldSetHeight(homeMainHeightParam)
    ? homeMainHeightParam
    : undefined;
  const bodyHeight = homeMainHeight === undefined ? undefined : "auto";

  if (bodyHeight) {
    document.getElementsByTagName("html")[0].style.height = bodyHeight;
    document.getElementsByTagName("body")[0].style.height = bodyHeight;
  }

  return homeMainHeight;
};
