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
import { GraduationCap, UserPlus } from "lucide-react";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    id: "",
    course: "",
  });

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ name: "", id: "", course: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-700">
        <GraduationCap className="w-6 h-6 mr-2" />
        Student Management
      </h2>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="ID"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) =>
            setNewStudent({ ...newStudent, course: e.target.value })
          }
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Button onClick={addStudent} className="bg-cyan-600 hover:bg-cyan-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-cyan-700">Name</TableHead>
            <TableHead className="text-cyan-700">ID</TableHead>
            <TableHead className="text-cyan-700">Course</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
