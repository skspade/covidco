import React, { useState } from "react";
import Table from "./Table";
import CardDeck from "./CardDeck";
import { useQuery } from "../../graphql/hooks/useQuery";
import { ListCompanysQuery } from "../../API";
import { listCompanys } from "../../graphql/queries";
import { Route, useHistory } from "react-router-dom";
import Toggle from "../Form/Toggle";

const Container = () => {
  const { data, error, loading } = useQuery<ListCompanysQuery>(listCompanys);
  const [isToggled, setIsToggled] = useState(false);
  const history = useHistory();
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="mt-20">
        <Toggle
          checkedLabel={"Table"}
          uncheckedLabel={"Cards"}
          checkedOnClick={(e)=>history.push('/card-deck')}
          uncheckedOnClick={(e)=>history.push('/table')}
          isToggled={isToggled}
          setToggled={setIsToggled}
        />
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
