import React from "react";
import { BarChart, Cell, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const students = [
    { id: 1, name: "Timi Oni", score: 90, comment: "Great improvement, keep it up!" },
    { id: 2, name: "Toluwaleyi Ade-Oni", score: 90, comment: "Great Performance & Very Insightful" },
    { id: 3, name: "Feyi", score: 90, comment: "Excellent performance!." },

];

const student = [
    { id: 1, name: "Timi Oni", score: 90, comment: "Great improvement & Focused on a Path, Very Exciting!" },
    { id: 2, name: "Toluwaleyi Ade-Oni", score: 90, comment: "Good Performance & Innovative" },
    { id: 3, name: "Feyi", score: 85, comment: "Very Good, keep it up!" },

];


const getBarColor = (score) => {
    if (score >= 90) return "#22C55E"; // green
    if (score >= 80) return "#3B82F6"; // blue
    if (score >= 70) return "#EAB308"; // yellow
    if (score >= 60) return "#F97316"; // orange
    return "#EF4444"; // red
};

export default function QuizResults() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 pt-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    ARK <br />Quiz Results Dashboard
                </h1>
                <p className="text-gray-800 mb-6 text-center font-semibold bg-green-200 p-4 rounded-lg">
                    All Assessment Results will be displayed here. Moving forward stay updated!
                </p>

                {/* Chart Section */}
                <div className="bg-white shadow-lg rounded-2xl p-2 mb-10">
                    <h2 className="text-md font-semibold my-4">Performance Overview</h2>
                    <div className="w-full h-64 text-green-500">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={students}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="score">
                                    {students.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={getBarColor(entry.score)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Table Section */}
                <section className="mb-10">
                    <h2 className="text-md font-semibold my-4">Quiz Title: React & HTML</h2>
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Score</th>
                                    {/* <th className="p-4">Grade</th> */}
                                    <th className="p-4">Comment</th>
                                </tr>
                            </thead>

                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="border-t">
                                        <td className="p-4">{student.name}</td>
                                        <td className="p-4">{student.score}%</td>
                                        <td className="p-4">{student.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-md font-semibold my-4">Quiz Title: April <span className="rounded-full px-2 p-1 bg-green-500 text-white">New</span> </h2>
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Score</th>
                                    {/* <th className="p-4">Grade</th> */}
                                    <th className="p-4">Comment</th>
                                </tr>
                            </thead>

                           <tbody>
                                {student.map((student) => (
                                    <tr key={student.id} className="border-t">
                                        <td className="p-4">{student.name}</td>
                                        <td className="p-4">{student.score}%</td>
                                        <td className="p-4">{student.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
