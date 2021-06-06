/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInstrumentInput = {
  id?: string | null,
  instrument: string,
  brand?: string | null,
  year?: number | null,
  price: number,
};

export type ModelInstrumentConditionInput = {
  instrument?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  year?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelInstrumentConditionInput | null > | null,
  or?: Array< ModelInstrumentConditionInput | null > | null,
  not?: ModelInstrumentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Instrument = {
  __typename: "Instrument",
  id: string,
  instrument: string,
  brand?: string | null,
  year?: number | null,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInstrumentInput = {
  id: string,
  instrument?: string | null,
  brand?: string | null,
  year?: number | null,
  price?: number | null,
};

export type DeleteInstrumentInput = {
  id: string,
};

export type ModelInstrumentFilterInput = {
  id?: ModelIDInput | null,
  instrument?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  year?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelInstrumentFilterInput | null > | null,
  or?: Array< ModelInstrumentFilterInput | null > | null,
  not?: ModelInstrumentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInstrumentConnection = {
  __typename: "ModelInstrumentConnection",
  items?:  Array<Instrument | null > | null,
  nextToken?: string | null,
};

export type CreateInstrumentMutationVariables = {
  input: CreateInstrumentInput,
  condition?: ModelInstrumentConditionInput | null,
};

export type CreateInstrumentMutation = {
  createInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstrumentMutationVariables = {
  input: UpdateInstrumentInput,
  condition?: ModelInstrumentConditionInput | null,
};

export type UpdateInstrumentMutation = {
  updateInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstrumentMutationVariables = {
  input: DeleteInstrumentInput,
  condition?: ModelInstrumentConditionInput | null,
};

export type DeleteInstrumentMutation = {
  deleteInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInstrumentQueryVariables = {
  id: string,
};

export type GetInstrumentQuery = {
  getInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstrumentsQueryVariables = {
  filter?: ModelInstrumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstrumentsQuery = {
  listInstruments?:  {
    __typename: "ModelInstrumentConnection",
    items?:  Array< {
      __typename: "Instrument",
      id: string,
      instrument: string,
      brand?: string | null,
      year?: number | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInstrumentSubscription = {
  onCreateInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstrumentSubscription = {
  onUpdateInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstrumentSubscription = {
  onDeleteInstrument?:  {
    __typename: "Instrument",
    id: string,
    instrument: string,
    brand?: string | null,
    year?: number | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
