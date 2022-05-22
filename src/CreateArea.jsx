// import React, { useState } from "react";

// const CreateNote = (props) => {
//     const [note, setnote] = useState({
//         title: "",
//         content: "",
//     });

//     const InputEvent = (event) => {
//     //   const value=event.target.value;
//     //   const name=event.target.name;
//     const {name ,value}=event.target;
//         setnote((prevData)=>{
//             return {
//                 ...prevData,
//                 [name]:value,
                
//             };
//         });
//         // console.log(note);
//     };
//    const addEvent=()=>{
//       props.passNote(note);
//    }
//     return <>
//         <div className="main_note">
//             <form>
//                 <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" />
//                 <textarea cols="50" rows="8" name="content" value={note.content} onChange={InputEvent} placeholder="write a note.." autoComplete="off"></textarea>
//                 <button onClick={addEvent}>Add </button>
//             </form>

//         </div>

//     </>
// };

// export default CreateNote;



import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
// import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
         <Zoom in={isExpanded}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
