import React, { useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import { Auth } from "aws-amplify";

type UseQueryType<ResultType> = {
  loading: boolean;
  error: any;
  data: ResultType;
  refetch: () => void;
};

export const useQuery = <ResultType extends {}, VariablesType extends {} = {}>(
  query: string,
  variables?: VariablesType
): UseQueryType<ResultType> => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({} as ResultType);
  const [user, setUser] = React.useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => setUser(user.getUsername() || ""))
      .catch(err => console.log(err));
  }, []);

  console.log({ user });
  const fetchQuery = async (query: string, variables?: VariablesType) => {
    try {
      const { data } = (await API.graphql(
        graphqlOperation(query, variables)
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


  const refetch = () => {
    fetchQuery(query, variables);
  };

  useEffect(() => {
    fetchQuery(query, variables);
  }, [query, variables]);

  return {
    loading,
    data,
    error,
    refetch
  };
};
