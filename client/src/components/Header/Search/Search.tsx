import type { GetProps } from "antd";
import { Input } from "antd";
import React from "react";
import "./search.scss";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const HeaderSearch: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  return (
    <div className="flex justify-center header-search max-sm:mt-8 max-md:mt-10">
      <div className="w-1/2">
        <Search
          size="large"
          placeholder="Search destinations"
          onSearch={onSearch}
          enterButton
          allowClear
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
