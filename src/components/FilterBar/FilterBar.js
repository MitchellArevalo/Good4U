import React, { useState } from "react";
//  import InputBase from "@material-ui/core/InputBase";
//  import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function FilterBar() {
  const [personName, setPersonName] = useState([]);
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <p>Filter</p>
  )
  //   <div className="   shadow-sm rounded-sm flex gap-4 p-5  mb-5 flex-col  w-full  md:w-1/4  md:gap-12 ">
  //     <h1 className="hidden md:font-bold md:text-2xl md:uppercase">
  //       Compra lo Último
  //     </h1>
  //     <div className="relative flex items-center">
  //       <input placeholder="Buscar..." type="text" className="input" />
  //       <button className="absolute right-0 : top-1/2">
  //         <SearchIcon />
  //       </button>
  //     </div>
  //     <div className="flex flex-col gap-5">
  //        <div className="flex  md:flex-col gap-5">
  //         <FormControl  className="w-1/2 md:w-full">
  //           <InputLabel id="demo-mutiple-name-label">Categoría</InputLabel>
  //           <Select
  //             labelId="demo-mutiple-name-label"
  //             id="demo-mutiple-name"
  //             multiple
  //             value={personName}
  //             input={<Input />}
             
  //           >
  //             {names.map((name) => (
  //               <MenuItem
  //                 key={name}
  //                 value={name}
  //                 // style={getStyles(name, personName, theme)}
  //               >
  //                 {name}
  //               </MenuItem>
  //             ))}
  //           </Select>
  //         </FormControl>
  //         <FormControl className="w-1/2 md:w-full">
  //           <InputLabel className="">Ordenado Por:</InputLabel>
  //           <Select
  //             labelId="demo-mutiple-name-label"
  //             id="demo-mutiple-name"
  //             multiple
  //             value={personName}
  //             input={<Input />}
  //             // className="border-none border-b-2 border-greyLightOpra border-opacity-75  "
  //           >
  //             {names.map((name) => (
  //               <MenuItem
  //                 key={name}
  //                 value={name}
  //                 // style={getStyles(name, personName, theme)}
  //               >
  //                 {name}
  //               </MenuItem>
  //             ))}
  //           </Select>
  //         </FormControl>
  //       </div> 
  //       <div>
  //         <div className=" flex  justify-between items-center font-semibold">
  //           <span>Con descuento:</span>
  //           <FormControl>
  //             <FormControlLabel
  //               control={
  //                 <Switch
  //                   checked={checked}
  //                   onChange={toggleChecked}
  //                   color="primary"
  //                 />
  //               }
  //             />
  //           </FormControl>
  //         </div>
  //         <div className=" flex  justify-between items-center font-semibold">
  //           <span>Envío Gratis:</span>
  //           <FormControl>
  //             <FormControlLabel
  //               control={
  //                 <Switch
  //                   checked={checked}
  //                   onChange={toggleChecked}
  //                   color="primary"
  //                 />
  //               }
  //             />
  //           </FormControl>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default FilterBar;
