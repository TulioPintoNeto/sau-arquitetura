import { PortfolioService } from "src/domain/entities/PortfolioService";
import { Item } from "../types/Item";
import { Includes } from "../types/Includes";
import { Asset } from "../types/Asset";
import { Photo } from "src/domain/entities/Photo";

export interface PortfolioJSON {
  items: Item[];
  includes: Includes;
}

const assetToPhoto = (asset: Asset | undefined): Photo | null => {
  if (!asset) {
    return null;
  }

  return {
    url: asset.fields.file.url,
    alt: asset.fields.description,
  };
};

const itemToPortfolioService =
  (json: PortfolioJSON) =>
  ({ fields }: Item): PortfolioService => {
    const firstPhotoId = fields.photos[0].sys.id;
    const firstAsset = json.includes.Asset.find(({ sys }) => sys.id === firstPhotoId);

    return {
      name: fields.name,
      photo: assetToPhoto(firstAsset),
    };
  };

export const toPortfolio = (json: PortfolioJSON): PortfolioService[] => {
  return json.items.map(itemToPortfolioService(json));
};
