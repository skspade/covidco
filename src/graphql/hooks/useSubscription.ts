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
      try{
      const { query, key, variables } = memoConfig;
      const subscription = API.graphql(graphqlOperation(query, {owner:'s900mhz'}));
      if (subscription instanceof Observable) {
        subscription.subscribe({
          next: (todoData) => console.log(todoData)
        })
        // const sub = subscription.subscribe({
        //   next: payload => {
        //     console.log({payload})
        //     try {
        //       const {
        //         value: {
        //           data: { [key]: item }
        //         }
        //       }: {
        //         value: { data: { [key: string]: ReturnType } };
        //       } = payload;
        //
        //       update(item);
        //     } catch (error) {
        //       console.error(`${error.message}`);
        //     }
        //   }
        // });
        // unsubscribe = () => {
        //   sub.unsubscribe();
        // };
      }}catch (e) {
        console.error(e)
      }
    }
    // return unsubscribe;
  }, [JSON.stringify(memoConfig)]);

  return [item];
};
