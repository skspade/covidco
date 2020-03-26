/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  description: string,
  rating: RatingInput,
  logoUrl: string,
  referencesUrl: Array< string | null >,
};

export type RatingInput = {
  UP: number,
  DOWN: number,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  referencesUrl?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
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

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  rating?: RatingInput | null,
  logoUrl?: string | null,
  referencesUrl?: Array< string | null > | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  referencesUrl?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
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

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating:  {
        __typename: "Rating",
        UP: number,
        DOWN: number,
      },
      logoUrl: string,
      referencesUrl: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  owner: string,
};

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  owner: string,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  owner: string,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    description: string,
    rating:  {
      __typename: "Rating",
      UP: number,
      DOWN: number,
    },
    logoUrl: string,
    referencesUrl: Array< string | null >,
  } | null,
};
