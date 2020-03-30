import React from "react";
import Table from "./Table";
import CardDeck from "./CardDeck";
import { useQuery } from "../../graphql/hooks/useQuery";
import { ListCompanysQuery } from "../../API";
import { listCompanys } from "../../graphql/queries";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../Form/Toggle";

const Container = () => {
  const { data, error, loading } = useQuery<ListCompanysQuery>(listCompanys);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center">
          <Link to="/table" className='mx-2'>
            <FontAwesomeIcon icon={faList} />
          </Link>
          <Link to="/card-deck" className='mx-2'>
            <FontAwesomeIcon icon={faTh} />
          </Link>
          <Toggle/>
        </div>
        <Route path="/table">
          <Table data={data} />
        </Route>
        <Route path="/card-deck">
          <CardDeck data={data} />
        </Route>
      </div>
    </div>
  );
};

export default Container;
