import { useRouter } from "next/router";

export const useMainSectionHeight = () => {
  const router = useRouter();
  const { isTestPurpose, mainSectionHeight: mainSectionHeightParam } = router.query;

  const shouldSetHeight = (
    queryParam: string | string[] | undefined
  ): queryParam is string =>
    isTestPurpose === "true" && Boolean(queryParam) && !Array.isArray(queryParam);

  const mainSectionHeight = shouldSetHeight(mainSectionHeightParam)
    ? mainSectionHeightParam
    : undefined;
  const bodyHeight = mainSectionHeight === undefined ? undefined : "auto";

  if (bodyHeight) {
    document.getElementsByTagName("html")[0].style.height = bodyHeight;
    document.getElementsByTagName("body")[0].style.height = bodyHeight;
  }

  return mainSectionHeight;
};
