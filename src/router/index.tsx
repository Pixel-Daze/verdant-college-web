import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonClick from "@/pages/LessonClick";
import LessonImg from "@/pages/LessonImg";
import LessonDemo from "@/pages/LessonDemo";
import LessonBox from "@/pages/LessonBox";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/lessonClick" element={<LessonClick />} />
                <Route path="/lessonImg" element={<LessonImg />} />
                <Route path="/lessonDemo" element={<LessonDemo />} />
                <Route path="/lessonBox" element={<LessonBox />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
