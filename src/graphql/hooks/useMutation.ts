import React from "react";

import { API, graphqlOperation } from "aws-amplify";

export const useMutation = <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
): [
  { data: ResultType; loading: boolean; error: Error | undefined },
  (variables: VariablesType | undefined) => void
] => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | undefined>();
  const [data, setData] = React.useState({} as ResultType);

  const mutation = async (mutation: string, variables?: VariablesType) => {
    setLoading(true);
    try {
      const { data } = (await API.graphql(
        graphqlOperation(mutation, variables)
      )) as {
        data: ResultType;
      };
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  async function executeMutation(variables: VariablesType | undefined) {
    await mutation(query, variables);
  }

  return [
    {
      loading,
      data,
      error
    },
    executeMutation
  ];
};
