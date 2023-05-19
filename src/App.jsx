import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseLayout from "./components/Layouts/course_layout";
import UserProfile from "./components/profile/userProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/enroll" element={<CourseLayout />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
