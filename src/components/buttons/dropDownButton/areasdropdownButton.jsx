import React, { useEffect } from "react";
import { DropdownBtn } from "./dropdownButton.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
// import { makeStyles } from "@material-ui/core/styles";
// import { useContext, useState, useEffect } from "react";
// import DropdownContext from "../../../dropdownStore/dropdowncontext";
// import { dropdownActions } from "../../../Store/dropdown-slice";
import DropdownFooter from "./dropdownfooter";
// import { useSelector } from "react-redux";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
// const useOutlinedInputStyles = makeStyles((theme) => ({
//   root: {
//     "& $notchedOutline": {
//       borderColor: "red",
//     },
//     "&:hover $notchedOutline": {
//       borderColor: "blue",
//     },
//     "&$focused $notchedOutline": {
//       borderColor: "green",
//     },
//   },
//   focused: {},
//   notchedOutline: {},
// }));
function MultipleSelectChip() {}
const DropdownButton = (props) => {
  // const outlinedInputClasses = useOutlinedInputStyles();
  // const DropdownContext = React.createContext();
  const [buttonClick, setButtonClick] = useState(true);
  const theme = useTheme();
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  function getStyles(name, selected, theme) {
    return {
      fontWeight:
        selected.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  let sendAreas = [];
  function handleClick() {
    setButtonClick(!buttonClick);
    sendAreas = [...selected];
    setSelected([]);
  }
  function cancelClick() {
    setButtonClick(!buttonClick);
    setSelected([]);
  }
  // const value = { buttonClick, setButtonClick };
  // const buttonClick = useSelector((state) => state.dropdown.buttonClick);
  // const defaultProps = {
  //   options: top100Films,
  //   getOptionLabel: (option) => option.title,
  // };
  // let inputStyle;
  // inputStyle = buttonClick ? {} : { display: "none" };
  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };
  // const buttonClick = useSelector((state) => state.dropdown.buttonClick);
  // useEffect(() => {
  //   console.log("Value Changed");
  // }, [buttonClick]);
  // const [value, setValue] = useState(null);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* <DropdownContext.Provider value={value}> */}
      <DropdownBtn
        height="50px"
        width="120px"
        onClick={() => {
          setButtonClick(!buttonClick);
        }}
      >
        <p style={{ fontSize: "20px" }}>{props.text}</p>
        <MdKeyboardArrowDown style={{ height: "30px", width: "30px" }} />
      </DropdownBtn>
      {buttonClick && (
        <div
          style={{
            display: "block",
            backgroundColor: "#F1F1F1",
            position: "absolute",
            width: "300px",
            height: "170px",
            marginTop: "5px",
            borderRadius: "10px",
            overflowY: "scroll",
          }}
        >
          <FormControl
            sx={{
              m: 1,
              width: 250,
              marginLeft: 2.5,
              marginTop: 2.5,
            }}
          >
            <InputLabel id="demo-multiple-chip-label">Areas</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={selected}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label=" Areas"
                  sx={{
                    "& .MuiInputBase-root-MuiOutlinedInput-root.Mui-focused": {
                      borderColor: "black",
                    },
                  }}
                />
              }
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                    outlineColor: "red",
                  }}
                >
                  {selected.map((value) => (
                    <Chip variant="outlined" key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selected, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DropdownFooter
            SetButtonClick={handleClick}
            ButtonClick={buttonClick}
            ButtonText="Confirm"
            SetCancelClick={cancelClick}
          />
        </div>
      )}
      {/* </DropdownContext.Provider> */}
    </div>
  );
};
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
export default DropdownButton;
