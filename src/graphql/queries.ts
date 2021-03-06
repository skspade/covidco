// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      description
      rating
      logoUrl
      category
      references {
        heading
        url
        company {
          id
          name
          description
          rating
          logoUrl
          category
        }
      }
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        rating
        logoUrl
        category
        references {
          heading
          url
        }
      }
      nextToken
    }
  }
`;
