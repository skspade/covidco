import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useQuery } from "../../graphql/hooks/useQuery";
import { ListCompanysQuery } from "../../API";
import { listCompanys } from "../../graphql/queries";

const Container = () => {
  const { data, error, loading } = useQuery<ListCompanysQuery>(listCompanys);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="mt-20">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Container;
