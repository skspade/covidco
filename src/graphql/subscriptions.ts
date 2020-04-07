// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String!) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String!) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String!) {
    onDeleteCompany(owner: $owner) {
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
