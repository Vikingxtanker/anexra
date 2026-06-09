import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CoursesHero from "@/sections/courses/CoursesHero";
import CoursesList from "@/sections/courses/CoursesList";
import CoursesImportance from "@/sections/courses/CoursesImportance";
import CoursesFAQ from "@/sections/courses/CoursesFAQ";


export default function Home() {
    return <>
        <Navbar/>
        <CoursesHero/>
        <CoursesList/>
        <CoursesImportance/>
        <CoursesFAQ/>

        <Footer/>
      </>;
}

