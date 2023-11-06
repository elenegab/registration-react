// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import LandingPage from './components/landingPage';
// // import Registration from './components/registration';


// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           {/* The navigation menu is empty without the "Registration" button */}
// //         </nav>

// //         <Routes>
// //           <Route path="/" element={<LandingPage />} />
// //           <Route path="/registration" element={<Registration />} />
// //           <Route path="/*" element={<Navigate to="/" />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/landingPage';
// import Registration from './components/registration';
// import Popup from './components/Popup'; // Import your Popup component

// function App() {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => {
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <img
//             src="path/to/your/image.png"
//             alt="User's photo"
//             onClick={openPopup}
//           />
//         </nav>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//       {isPopupVisible && (
//         <Popup onClose={closePopup} onLogout={handleLogout} />
//       )}
//     </Router>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,  } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Registration from './components/registration';
import Popup from './components/Popup'; // Import your Popup component
import Form from './components/form'; // Import your Form component
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/form" element={<Form />}/>
          <Route path="/popup" element={<Popup />} />
          <Route path="/*" element={<Navigate to="/" />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
