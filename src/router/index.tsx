import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonClick from "@/pages/LessonClick";
import LessonImg from "@/pages/LessonImg";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/lessonClick" element={<LessonClick />} />
                <Route path="/lessonImg" element={<LessonImg />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
