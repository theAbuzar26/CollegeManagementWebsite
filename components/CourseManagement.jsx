import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookOpen, PlusCircle } from "lucide-react";

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    instructor: "",
  });

  const addCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ name: "", code: "", instructor: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-700">
        <BookOpen className="w-6 h-6 mr-2" />
        Course Management
      </h2>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="Course Code"
          value={newCourse.code}
          onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="Instructor"
          value={newCourse.instructor}
          onChange={(e) =>
            setNewCourse({ ...newCourse, instructor: e.target.value })
          }
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Button onClick={addCourse} className="bg-cyan-600 hover:bg-cyan-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-cyan-700">Course Name</TableHead>
            <TableHead className="text-cyan-700">Course Code</TableHead>
            <TableHead className="text-cyan-700">Instructor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={index}>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.instructor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
