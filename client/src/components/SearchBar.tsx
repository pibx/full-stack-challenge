import React from "react";

type SearchBarProps = {
  name: string;
  id: number;
  bio?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ name, id, bio }) => {
  return <div></div>;
};

export default SearchBar;
