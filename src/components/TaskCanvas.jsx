import React, { useState } from "react";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import "./TaskCanvas.css";
import ProjectCards from "./ProjectCards";

function getWeek(firstDayOfWeek) {
    // generate the week
    const week = [];
    for (let i = 0; i < 7; i++) {
        week.push(firstDayOfWeek.day(i));
    }
    return week;
}
export default function TaskCanvas() {
    const today = dayjs();
    const weekStartDate = dayjs(today).startOf("week");
    const [firstDayOfWeek, setFirstDayOfWeek] = useState(weekStartDate);
    const [week, setWeek] = useState(getWeek(firstDayOfWeek));
    //console.log(today);

    return (
        <div className="taskCanvas">
            <div className="weekBar">
                <Button
                    colorScheme='purple' variant='solid'
                    className="weekNavigationButton"
                    title="show previous week"
                    onClick={() => {
                        setFirstDayOfWeek(firstDayOfWeek.subtract(1, "week"));
                        setWeek(getWeek(firstDayOfWeek));
                    }}
                >
                    <GrFormPrevious />
                </Button>
                <Text
                    fontSize='1rem' color='purple'
                    className="dateRangeBox">
                    {week[0].format("MMMM D, YYYY")} - {week[6].format("MMMM D, YYYY")}
                </Text>
                <Button
                    colorScheme='purple' variant='solid'
                    className="weekNavigationButton"
                    title="show previous week"
                    onClick={() => {
                        setFirstDayOfWeek(firstDayOfWeek.add(1, "week"));
                        setWeek(getWeek(firstDayOfWeek));
                    }}
                >
                    <GrFormNext />
                </Button>
                <Button
                    colorScheme='purple' variant='outline'
                    className="gotoCurrentWeek"
                    title="show current week"
                    onClick={() => {
                        if (
                            week.filter((day) => {
                                return day === today;
                            }).length === 0
                        ) {
                            setFirstDayOfWeek(weekStartDate);
                            setWeek(getWeek(today));
                        }
                    }}
                >
                    Goto Current Week
                </Button>
            </div>
            <Table colorScheme="purple" className="weekDays">
                {week.map((day, index) => {
                    return (
                        <Th key={index} className="weekDay">
                            {day.toDate().toDateString().substring(0, 3)}{" "}
                            {day.toDate().toDateString().substring(8, 10)}
                        </Th>
                    );
                })}
            </Table>
            <div className="taskWindow">
                {/* <div className="noTaskAdded">
                    <p>There are no filled timesheet/task for the selected week</p>
                    <Button colorScheme="purple" size="lg" className="addTaskButton"
                        onClick={() => {
                            alert("need to add task")
                        }}
                    >Add Task</Button>
                </div> */}
                <ProjectCards />
            </div>
        </div >
    );
}
