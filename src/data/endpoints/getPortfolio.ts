import { PortfolioJSON, toPortfolio } from "../models/toPortfolio";
import { server } from "../server";

export const getPortfolio = async () => {
  const path = "/entries";
  const params = { content_type: "work" };
  const get = server();
  const { data } = await get<PortfolioJSON>(path, { params });
  return toPortfolio(data);
};
