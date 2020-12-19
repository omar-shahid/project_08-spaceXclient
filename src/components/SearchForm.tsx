import React from "react";

interface Props{
  onSearchStr: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchForm: React.FC<Props> = ({onSearchStr}) => (
    <div className="w-9/12 mx-auto mt-8">
      <form>
        <input onChange={onSearchStr} type="text" name="" id="" placeholder="Search..." className="mx-auto text-gray-600 w-full text-xl p-3 border-gray-400 border-b-2 focus:outline-none focus:border-blue-400" />
        <input type="submit" name="search" value="" />
      </form>
    </div>
    
  );




export default SearchForm;
