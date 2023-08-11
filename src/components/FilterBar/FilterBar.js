import React, { useEffect, useState } from "react";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Input from '@mui/material/Input';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useProduct } from "../../hooks/useProduct";
import { sortOptions } from "./listOptions";

function FilterBar() {
  const [checked, setChecked] = useState(false);
  const { onFilterSearchProducts, onFilterPriceProducts, optionFilterPrice, productSearch } = useProduct()

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="  shadow-lg rounded-sm flex gap-4 p-5  mb-5 flex-col  w-full  md:w-1/4  md:gap-12 ">
      <h1 className="hidden md:font-bold md:text-2xl md:uppercase">
        Compra lo Último
      </h1>
      <div className="relative flex items-center">
        <input placeholder="Buscar..." type="text" className="input" value={productSearch.product} onChange={onFilterSearchProducts} />
        <button className="absolute right-0 : top-1/2">
          <SearchIcon />
        </button>

      </div>
      {
        productSearch.flag && <p className="font-bold text-red-700">Introduzca solo letras. No pase de 30 caracteres</p>
      }
      <div className="flex flex-col gap-5">
        <div className="flex  md:flex-col gap-5">
          {/* <FormControl className="w-1/2 md:w-full">
            <InputLabel id="demo-mutiple-name-label">Categoría</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value={"hola"}
              input={<Input />}

            >
              {categoriesOptions.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          <FormControl className="w-1/2 md:w-full">
            <InputLabel className="">Ordenado Por:</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              onChange={onFilterPriceProducts}

              value={optionFilterPrice}
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
        <div>
          <div className=" flex  justify-between items-center font-semibold">
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
          </div>
          <div className=" flex  justify-between items-center font-semibold">
            <span>Envío Gratis:</span>
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
          </div>
        </div>
      </div>
    </div>
  )

}

export default FilterBar;
