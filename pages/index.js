import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import StudentManagement from "../StudentManagement";
import CourseManagement from "../CourseManagement";
import FacultyManagement from "../FacultyManagement";

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-cyan-50 min-h-screen">
      <header className="flex items-center justify-center mb-8 bg-cyan-600 text-white p-4 rounded-lg shadow-md">
        <GraduationCap className="w-10 h-10 mr-2" />
        <h1 className="text-3xl font-bold">College Management System</h1>
      </header>
      <Tabs defaultValue="students" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-cyan-100">
          <TabsTrigger
            value="students"
            className="flex items-center justify-center"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Students
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="flex items-center justify-center"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger
            value="faculty"
            className="flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Faculty
          </TabsTrigger>
        </TabsList>
        <TabsContent value="students">
          <StudentManagement />
        </TabsContent>
        <TabsContent value="courses">
          <CourseManagement />
        </TabsContent>
        <TabsContent value="faculty">
          <FacultyManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
