/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  description: string,
  rating: number,
  logoUrl: string,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logoUrl?: ModelStringInput | null,
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

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  rating?: number | null,
  logoUrl?: string | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type CreateReferenceInput = {
  heading: string,
  url: string,
  referenceCompanyId?: string | null,
};

export type ModelReferenceConditionInput = {
  heading?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelReferenceConditionInput | null > | null,
  or?: Array< ModelReferenceConditionInput | null > | null,
  not?: ModelReferenceConditionInput | null,
};

export type UpdateReferenceInput = {
  heading?: string | null,
  url?: string | null,
  referenceCompanyId?: string | null,
};

export type DeleteReferenceInput = {
  id?: string | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  logoUrl?: ModelStringInput | null,
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

export type ModelReferenceFilterInput = {
  heading?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelReferenceFilterInput | null > | null,
  or?: Array< ModelReferenceFilterInput | null > | null,
  not?: ModelReferenceFilterInput | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateReferenceMutationVariables = {
  input: CreateReferenceInput,
  condition?: ModelReferenceConditionInput | null,
};

export type CreateReferenceMutation = {
  createReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateReferenceMutationVariables = {
  input: UpdateReferenceInput,
  condition?: ModelReferenceConditionInput | null,
};

export type UpdateReferenceMutation = {
  updateReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteReferenceMutationVariables = {
  input: DeleteReferenceInput,
  condition?: ModelReferenceConditionInput | null,
};

export type DeleteReferenceMutation = {
  deleteReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetReferenceQueryVariables = {
  id: string,
};

export type GetReferenceQuery = {
  getReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListReferencesQueryVariables = {
  filter?: ModelReferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReferencesQuery = {
  listReferences:  {
    __typename: "ModelReferenceConnection",
    items:  Array< {
      __typename: "Reference",
      heading: string,
      url: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        description: string,
        rating: number,
        logoUrl: string,
      } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    rating: number,
    logoUrl: string,
    references:  {
      __typename: "ModelReferenceConnection",
      items:  Array< {
        __typename: "Reference",
        heading: string,
        url: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateReferenceSubscriptionVariables = {
  owner: string,
};

export type OnCreateReferenceSubscription = {
  onCreateReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateReferenceSubscriptionVariables = {
  owner: string,
};

export type OnUpdateReferenceSubscription = {
  onUpdateReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteReferenceSubscriptionVariables = {
  owner: string,
};

export type OnDeleteReferenceSubscription = {
  onDeleteReference:  {
    __typename: "Reference",
    heading: string,
    url: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      description: string,
      rating: number,
      logoUrl: string,
      references:  {
        __typename: "ModelReferenceConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
