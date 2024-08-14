import { PortfolioJSON } from "../models/toPortfolio";
import { toPortfolioIds } from "../models/toPortfolioIds";
import { server } from "../server";

export const getPortfolioIds = async () => {
  const path = "/entries";
  const params = { content_type: "work" };
  const get = server();
  const { data } = await get<PortfolioJSON>(path, { params });
  return toPortfolioIds(data);
};
