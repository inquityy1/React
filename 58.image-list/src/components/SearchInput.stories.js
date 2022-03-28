import React from "react";
import { storiesOf } from "@storybook/react";
import SearchInput from "./SearchInput";

const defaultProps = {
  entry: "",
  setState: () => {},
};

const populatedProps = {
  entry: "dsadsadas",
  setState: () => {},
};

storiesOf("SearchInput", module)
  .add("default", () => <SearchInput {...defaultProps} />)
  .add("populated", () => <SearchInput {...populatedProps} />);
