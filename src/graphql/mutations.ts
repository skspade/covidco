// tslint:disable
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      name
      description
      rating
      logoUrl
      references {
        items {
          heading
          url
        }
        nextToken
      }
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      name
      description
      rating
      logoUrl
      references {
        items {
          heading
          url
        }
        nextToken
      }
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      name
      description
      rating
      logoUrl
      references {
        items {
          heading
          url
        }
        nextToken
      }
    }
  }
`;
export const createReference = /* GraphQL */ `
  mutation CreateReference(
    $input: CreateReferenceInput!
    $condition: ModelReferenceConditionInput
  ) {
    createReference(input: $input, condition: $condition) {
      heading
      url
      company {
        id
        name
        description
        rating
        logoUrl
        references {
          nextToken
        }
      }
    }
  }
`;
export const updateReference = /* GraphQL */ `
  mutation UpdateReference(
    $input: UpdateReferenceInput!
    $condition: ModelReferenceConditionInput
  ) {
    updateReference(input: $input, condition: $condition) {
      heading
      url
      company {
        id
        name
        description
        rating
        logoUrl
        references {
          nextToken
        }
      }
    }
  }
`;
export const deleteReference = /* GraphQL */ `
  mutation DeleteReference(
    $input: DeleteReferenceInput!
    $condition: ModelReferenceConditionInput
  ) {
    deleteReference(input: $input, condition: $condition) {
      heading
      url
      company {
        id
        name
        description
        rating
        logoUrl
        references {
          nextToken
        }
      }
    }
  }
`;
