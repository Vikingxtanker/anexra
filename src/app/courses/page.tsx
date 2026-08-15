import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CoursesHero from "@/sections/courses/CoursesHero";
import CoursesList from "@/sections/courses/CoursesList";
import CoursesImportance from "@/sections/courses/CoursesImportance";
import CoursesFAQ from "@/sections/courses/CoursesFAQ";


// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;


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

