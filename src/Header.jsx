// import React from "react";
// import logo from "./image/logo.png.png"

// const Header=()=>{
//     return <>
//      <div className='header'>
//      <img src={logo} alt="logo" width='70' height='50'/>
//      <h1>My-note</h1>
//      </div>
//     </>
// };

//  export default Header; 
import React from "react";


// import HighlightIcon from '@mui/icons-material/HighlightIcon';
import EventNoteIcon from '@mui/icons-material/EventNote';
function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon />
        MyNote
      </h1>
    </header>
  );
}

export default Header;