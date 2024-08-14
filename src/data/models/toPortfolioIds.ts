import { Item } from "../types/Item";
import { Includes } from "../types/Includes";

export interface PortfolioJSON {
  items: Item[];
  includes: Includes;
}


const itemToId =
  (item: Item): string => {
    return item.sys.id;
  };

export const toPortfolioIds = (json: PortfolioJSON): string[] => {
  return json.items.map(itemToId);
};
