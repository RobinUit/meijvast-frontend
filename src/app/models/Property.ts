import Address from "./Address";
import Document from "./Document";
import Location from "./Location";
import Media from "./Media";
import Price from "./Price";
import TotalArea from "./TotalArea";

export interface Property {
  id: string;
  address: Address;
  location: Location;
  prices: Price[];
  documents: Document[];
  media: Media;
  type: string;
  constructionYear: string;
  totalArea: TotalArea;
  floors: string;
  description: string;
}