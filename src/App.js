import "./App.css";

import Movie from "./Components/Movie";

function App() {
  return (
    <div>
      <Movie />
    </div>
  );
}

export default App;

// App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SearchInput from "./Components2/SearchInput";
// import SearchResults from "./Components2/SearchResults";
// import MovieDetails from "./Components2/MovieDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {" "}
//         {/* Use Routes instead of Switch */}
//         <Route path="/" element={<SearchInput />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/movie/:id" element={<MovieDetails />} />
//       </Routes>{" "}
//       {/* Use Routes instead of Switch */}
//     </Router>
//   );
// }

// export default App;
