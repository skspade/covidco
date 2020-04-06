import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useQuery } from "../../graphql/hooks/useQuery";
import { ListCompanysQuery } from "../../API";
import { listCompanys } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
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
          checkedOnClick={() => history.push("/card-deck")}
          uncheckedOnClick={() => history.push("/table")}
          isToggled={isToggled}
          setToggled={setIsToggled}
        />
        <Table data={data} />
      </div>
    </div>
  );
};

export default Container;
