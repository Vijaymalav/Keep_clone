// import React from "react";

// const Footer=()=>{
//     const year=new Date().getFullYear();
//     return (
//         <>
//     <footer>
//         <p>copyright © {year} </p>
//     </footer>
//     </>
//     );
// };
// export default Footer;

import React from "react";

var d = new Date();
var currentYear = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
