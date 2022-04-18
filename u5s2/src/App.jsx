import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";

function App() {

  const [showPage, setShowPage] = useState(true);

  const changePage = () => {
    if(showPage === true){
      <ShowStudents/>
      setShowPage(!true);
    }else {
      <AddStudent />
      setShowPage(true);
    }
    
    
  }
  return (
    <div className="App">
      <button className="togglebtn" onclick={changePage}>Change</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {showPage ? <ShowStudents/> : <AddStudent/>}
    </div>
  );
}

export default App;