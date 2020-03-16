import { HotelType } from "./fragment";

const query = /* GraphQL */ `
  query getHotel($id: String!) {
    getHotel(id: $id) {
      ...HotelType
    }
  }

  ${HotelType}
`;
