/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstrument = /* GraphQL */ `
  query GetInstrument($id: ID!) {
    getInstrument(id: $id) {
      id
      instrument
      brand
      year
      price
      createdAt
      updatedAt
    }
  }
`;
export const listInstruments = /* GraphQL */ `
  query ListInstruments(
    $filter: ModelInstrumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstruments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        instrument
        brand
        year
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
