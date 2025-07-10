
// // import React, { useState } from 'react';
// // import Navbar from './components/Navbar';
// // import AddJobForm from './components/AddJobForm';
// // import './App.css';

// // function App() {
// //   const [showForm, setShowForm] = useState(false);

// //   const handleShowForm = () => {
// //     setShowForm(true);
// //   };

// //   const handleFormSubmit = (formData) => {
// //     console.log("Form Submitted:", formData);
// //     setShowForm(false); 
// //   };

// //   const handleCancelForm=()=>{
// //     setShowForm(false);
// //   }

// //   return (
// //     <div className="App">
// //       <Navbar onAddJobClick={handleShowForm} />
// //       {showForm && <AddJobForm onSubmit={handleFormSubmit} />}
// //       {!showForm && <addjobForm onSubmit={handleFormSubmit} onSubmit={handleCancelForm} />}
// //       <footer className="text-center mt-5">
// //         <p>&copy; 2023 JobIntelli. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import AddJobForm from './components/AddJobForm';
// import './App.css';

// function App() {
//   const [showForm, setShowForm] = useState(false);

//   const handleShowForm = () => {
//     setShowForm(true);
//   };

//   const handleFormSubmit = (formData) => {
//     console.log("Form Submitted:", formData);
//     setShowForm(false); 
//   };

//   return (
//     <div className="App">
//       <Navbar onAddJobClick={handleShowForm} />
      
//       {showForm && <AddJobForm onSubmit={handleFormSubmit} />}
      


//       <footer className="text-center mt-5">
//         <p>&copy; 2023 JobIntelli. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddJobForm from './components/AddJobForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <Navbar onAddJobClick={handleShowForm} />
      {showForm && (
        <AddJobForm onSubmit={handleFormSubmit} onCancel={handleCancelForm} />
      )}
      <footer className="text-center mt-5">
        <p>&copy; 2023 JobIntelli. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
