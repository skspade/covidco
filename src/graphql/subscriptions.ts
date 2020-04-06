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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String!) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String!) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateReference = /* GraphQL */ `
  subscription OnCreateReference($owner: String!) {
    onCreateReference(owner: $owner) {
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
export const onUpdateReference = /* GraphQL */ `
  subscription OnUpdateReference($owner: String!) {
    onUpdateReference(owner: $owner) {
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
export const onDeleteReference = /* GraphQL */ `
  subscription OnDeleteReference($owner: String!) {
    onDeleteReference(owner: $owner) {
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
