import React, { useMemo } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable";

type Config<VariableType extends {}> = {
  query: string;
  key: string;
  variables?: VariableType;
};

export const useSubscription = <
  ReturnType extends { id: string },
  VariablesType extends {} = {}
>({
  config,
  itemData
}: {
  config?: Config<VariablesType>;
  itemData?: ReturnType;
} = {}) => {
  const [item, update] = React.useState<ReturnType | undefined>(itemData);

  const memoConfig = useMemo(() => config, [config]);

  React.useEffect(() => {
    let unsubscribe;
    if (memoConfig) {
      const { query, key, variables } = memoConfig;
      const subscription = API.graphql(graphqlOperation(query, variables));
      if (subscription instanceof Observable) {
        const sub = subscription.subscribe({
          next: payload => {
            try {
              const {
                value: {
                  data: { [key]: item }
                }
              }: {
                value: { data: { [key: string]: ReturnType } };
              } = payload;

              update(item);
            } catch (error) {
              console.error(`${error.message}`);
            }
          }
        });
        unsubscribe = () => {
          sub.unsubscribe();
        };
      }
    }
    return unsubscribe;
  }, [JSON.stringify(memoConfig)]);

  return [item];
};
