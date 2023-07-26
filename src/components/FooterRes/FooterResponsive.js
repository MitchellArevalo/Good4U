import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Avatar } from "@mui/material";

const listName = [
  {
    id: 1,
    name: "Mitchell Arévalo",
  },
  {
    id: 2,
    name: "Daniel Martínez",
  },
  {
    id: 3,
    name: "Jose Popayán",
  },
  {
    id: 4,
    name: "Fernando Arango",
  },
];
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));

export default function ControlledAccordions() {
  //   const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="lg:hidden flex flex-col gap-y-1">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="{classes.heading}">¿Quiénes somos?</Typography>
          {/* <Typography className="{classes.secondaryHeading}">I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En Opra nos enfocamos en satisfacer las necesidades del cliente,
            buscando un servicio mas express al momento de entregar nuetros
            productos y estar siempre conectados para estar en constante mejora
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="{classes.heading}">Contactos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className=" text-footer flex gap-x-5 ">
              <p>
                <MailOutlineIcon sx={{ color: "#3A86FF" }} /> opra@gmail.com
              </p>
              <p>
                <PhoneIcon sx={{ color: "#3A86FF" }} />
                +57 318 547 2589
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className=" ">Asesores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <div className="">
              <div className="flex gap-x-1">
                {listName.map((item) => (
                  <Avatar
                    key={item.id}
                    alt={item.name}
                    sx={{ backgroundColor: "#3A86FF" }}
                    src="/broken-image.jpg"
                  />
                ))}
              </div>
              <p className="text-footer my-2 font-bold">
                Nuestros asesores te atenderán con el mayor de los gustos
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="{classes.heading}">Regístrate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className=" ">
              <h2 className="title-footer">
                Infórmate de todos nuestro productos
              </h2>
              <p className="text-footer my-2">
                Déjanos tu email para recibir novedades en nuestra tienda
              </p>
              <form className="flex flex-col items-start gap-y-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="py-2 px-8 border-2 rounded-lg border-blueOpra  text-greyLightOpra placeholder:text-greyLightOpra"
                />
                <button className="bg-blueOpra text-white px-8 py-2 rounded-lg">
                  Suscribirse
                </button>
              </form>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
