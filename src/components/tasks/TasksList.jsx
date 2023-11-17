import React from "react";

export const TasksList = ({ id, tasksName, done }) => {

   

return (
    <>

    <tr className="tasks_box">
        <td className="tasks_box__line">
            <input type="checkbox"
            checked={done}
            /* onChange={() => toggleTask(task)} */
            />
            <p>{id} </p>
            <p>{tasksName}</p>
       
        </td>
    </tr>

    
   
    </>
    
  );
};