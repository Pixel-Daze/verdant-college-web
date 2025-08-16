import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonClick from "@/pages/LessonClick";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/lessonClick" element={<LessonClick />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
