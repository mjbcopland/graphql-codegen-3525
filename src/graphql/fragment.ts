import gql from 'graphql-tag'

export const HotelType = gql`
  fragment HotelType on HotelType {
    name
  }
`
