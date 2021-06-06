/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstrument = /* GraphQL */ `
  mutation CreateInstrument(
    $input: CreateInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    createInstrument(input: $input, condition: $condition) {
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
export const updateInstrument = /* GraphQL */ `
  mutation UpdateInstrument(
    $input: UpdateInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    updateInstrument(input: $input, condition: $condition) {
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
export const deleteInstrument = /* GraphQL */ `
  mutation DeleteInstrument(
    $input: DeleteInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    deleteInstrument(input: $input, condition: $condition) {
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
