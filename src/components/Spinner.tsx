import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = (props: Partial<FontAwesomeIconProps>) => {
  return <FontAwesomeIcon icon={faSpinner} spin {...props} />;
};

export default Spinner;
