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
import { Users, UserPlus } from "lucide-react";

export default function FacultyManagement() {
  const [faculty, setFaculty] = useState([]);
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    id: "",
    department: "",
  });

  const addFaculty = () => {
    setFaculty([...faculty, newFaculty]);
    setNewFaculty({ name: "", id: "", department: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-700">
        <Users className="w-6 h-6 mr-2" />
        Faculty Management
      </h2>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Name"
          value={newFaculty.name}
          onChange={(e) =>
            setNewFaculty({ ...newFaculty, name: e.target.value })
          }
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="ID"
          value={newFaculty.id}
          onChange={(e) => setNewFaculty({ ...newFaculty, id: e.target.value })}
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Input
          placeholder="Department"
          value={newFaculty.department}
          onChange={(e) =>
            setNewFaculty({ ...newFaculty, department: e.target.value })
          }
          className="border-cyan-300 focus:border-cyan-500"
        />
        <Button onClick={addFaculty} className="bg-cyan-600 hover:bg-cyan-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Faculty
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-cyan-700">Name</TableHead>
            <TableHead className="text-cyan-700">ID</TableHead>
            <TableHead className="text-cyan-700">Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {faculty.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
