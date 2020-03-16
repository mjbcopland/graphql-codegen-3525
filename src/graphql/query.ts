import gql from 'graphql-tag'
import { HotelType } from './fragment'

const query = gql`

  query getHotel($id: String!) {
    getHotel(id: $id) {
      ...HotelType
    }
  }

  ${HotelType}

`
