import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import VectorGreen from "../../assets/img/VectorGreen.png";
import VectorRed from "../../assets/img/VectorRed.png";

function PromotionTable() {

    const tableData = [
        {
            icon: IoIosArrowDropdown,
            name: "Justin Septimus",
            project: "919 × 30",
            date: "14/02/2025",
            outcome: "Pump & Dump",
            status: "Closed",
            votes: 25,
            action: "Leave Feedback",
        },
        {
            icon: IoIosArrowDropdown,
            name: "Justin Septimus",
            project: "Active",
            date: "14/02/2025",
            outcome: "Pump & Dump",
            status: "Active",
            votes: 23,
            action: "Leave Feedback",
        },
        {
            icon: IoIosArrowDropdown,
            name: "Justin Septimus",
            project: "Active",
            date: "14/02/2025",
            outcome: "Pump & Dump",
            status: "Active",
            votes: 76,
            action: "Leave Feedback",
        },
    ];

    const Table = () => {
        return (
            <div className="container mx-auto p-4 overflow-x-auto">
                <table className="min-w-full">
                    {/* Table Header */}
                    <thead>
                        <tr className="text-2xl">
                            <th className="py-2 px-4 text-left">Details</th>
                            <th className="py-2 px-4">Project</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Outcome</th>
                            <th className="py-2 px-4">Votes</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="text-center font-bold whitespace-nowrap">
                                <td className="py-2 px-4 item-left">
                                    <row.icon className="text-white" />
                                </td>
                                <td className="py-2 px-4 text-xl">{row.name}</td>
                                <td className="py-2 px-4">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`px-3 py-1 rounded-full text-sm flex items-center ${row.status === "Closed"
                                                ? "text-[#C50407] bg-white"
                                                : "text-[#004Df4] bg-white"
                                                }`}
                                        >
                                            <GoDotFill /> {row.status}
                                        </div>
                                        <p className="mt-1">{row.date}</p>
                                    </div>
                                </td>
                                <td className="py-2 px-4"> <span className="bg-white customeYellow w-auto rounded-xl py-2 px-4">{row.outcome}</span> </td>
                                <td className="py-2 px-4 customeYellow text-2xl">{row.votes}</td>
                                <td className="py-2 px-4 flex items-center justify-end space-x-5">
                                    <div className="flex flex-col items-center space-y-2">
                                        <img className="w-7 h-7" src={VectorGreen} alt="VectorGreen" />
                                        <p className="font-normal">Agree</p>
                                    </div>

                                    <div className="flex flex-col items-center space-y-2">
                                        <img className="w-7 h-7" src={VectorRed} alt="VectorRed" />
                                        <p className="font-normal">Disagree</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <Table />
        </div>
    )
}

export default PromotionTable