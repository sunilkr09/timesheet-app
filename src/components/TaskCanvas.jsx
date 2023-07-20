import React, { useState } from "react";
import dayjs from "dayjs";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, Text, Select } from '@chakra-ui/react'
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
import ProjectRow from "./ProjectRow";
//import "./TaskCanvas.css";
const tasks = require('./projects.json').tasks;

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
            <HStack className="weekBar" spacing='10px'>
                <Box w='80' textAlign='center'>
                    <Text
                        fontSize='1rem' color='purple'
                        className="dateRangeBox">
                        {week[0].format("MMMM D, YYYY")} - {week[6].format("MMMM D, YYYY")}
                    </Text>
                </Box>
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
            </HStack>
            <TableContainer colorScheme="purple" className="weekDays">
                <Table variant='simple'>
                    {/* <TableCaption>Timesheet Add window</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th textAlign='center'>Project Name</Th>
                            {week.map((day, index) => {
                                return (
                                    <Th key={index} className="weekDay" textAlign='center'>
                                        {day.toDate().toDateString().substring(0, 3)}{" "}
                                        {day.toDate().toDateString().substring(8, 10)}
                                    </Th>
                                );
                            })}
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <ProjectRow tasks={tasks} />
                    </Tbody>
                    {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
            {/* <div className="taskWindow">
                <p>There are no filled timesheet/task for the selected week</p>
                <Button colorScheme="purple" size="lg" className="addTaskButton">Add Task</Button>
            </div> */}
        </div>
    );
}
