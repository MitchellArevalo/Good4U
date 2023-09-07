import React from "react";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useProduct } from "../../hooks/useProduct";
import { sortOptions, categoriesOptions } from "./listOptions";
import "../../styles/customRange.css";

function FilterBar() {
  const {
    onFilterSearchProducts,
    onFilterPriceProducts,
    optionFilterSort,
    optionFilterCategory,
    productSearch,
    onFilterCategory,
    onFilterPrice,
    minPriceProducts,
    maxPriceProducts,
    optionFilterPrice,
    resetFilterProduct,
    products,
  } = useProduct();
  const categoriesProducts = categoriesOptions(products);
  return (
    <div className="  shadow-lg rounded-sm flex  p-5  mb-5 flex-col  w-full  md:w-1/4  md:gap-12 ">
      <h1 className="hidden md:font-bold md:text-2xl md:uppercase">
        Compra lo Último
      </h1>
      <div className="relative flex items-center">
        <input
          placeholder="Buscar..."
          type="text"
          className="input"
          value={productSearch.product}
          onChange={onFilterSearchProducts}
        />
        <button className="absolute right-0 : top-1/2">
          <SearchIcon />
        </button>
      </div>
      {productSearch.flag && (
        <p className="font-bold text-red-700">
          Introduzca solo letras. No pase de 30 caracteres
        </p>
      )}
      <div className="flex flex-col : gap-y-5">
        <div className="flex  md:flex-col gap-5">
          <FormControl className="w-1/2 md:w-full">
            <InputLabel className="">Categorías</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              onChange={onFilterCategory}
              value={optionFilterCategory}
              input={<Input />}
              className="border-none border-b-2 border-greyLightOpra border-opacity-75  "
            >
              {categoriesProducts.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="w-1/2 md:w-full">
            <InputLabel className="">Ordenado Por:</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              onChange={onFilterPriceProducts}
              value={optionFilterSort}
              input={<Input />}
              className="border-none border-b-2 border-greyLightOpra border-opacity-75  "
            >
              {sortOptions.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center justify-between">
          <div class="w-64 relative">
            <input
              type="range"
              class="appearance-none  h-1 bg-black rounded-full outline-none z-2 "
              id="custom-range"
              value={optionFilterPrice}
              min={minPriceProducts}
              max={maxPriceProducts}
              onChange={onFilterPrice}
            />
            <div
              class="absolute left-0 right-0 top-0 bottom-0 flex items-center"
              id="custom-range-thumb"
            >
              <div class="h-6 w-1 bg-white mx-auto"></div>
            </div>
          </div>
          <span className=": font-semibold">{optionFilterPrice}</span>
        </div>
        {/* <div className=" flex  justify-between items-center font-semibold">
          <span>Con descuento:</span>
          <FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={toggleChecked}
                  color="primary"
                />
              }
            />
          </FormControl>
        </div> */}
        <button
          className="p-1 text-white bg-black border-2  border-black w-full rounded-sm "
          onClick={resetFilterProduct}
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
