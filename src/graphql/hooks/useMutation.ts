import React, { useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
// import useDeepCompareEffect from "use-deep-compare-effect";

type UseQueryType<ResultType> = {
  loading: boolean;
  error: any;
  data: ResultType;
  refetch: () => void;
};

export const useMutation = <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
  variables?: VariablesType
): [
  { data: ResultType; loading: boolean; error: string },
  (variables: VariablesType | undefined) => void
] => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
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

  // useEffect(() => {
  //   mutation(query, variables);
  // }, [query, variables]);

  return [
    {
      loading,
      data,
      error
    },
    executeMutation
  ];
};
