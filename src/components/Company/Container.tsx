import React from 'react';
import Table from "./Table";
import CardDeck from "./CardDeck";
import {useQuery} from "../../graphql/hooks/useQuery";
import {ListCompanysQuery} from "../../API";
import {listCompanys} from "../../graphql/queries";

const Container = () => {
  const { data, error, loading } = useQuery<ListCompanysQuery>(listCompanys);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Table data={data} />
    <CardDeck/>
    </div>
  );
};

export default Container;
