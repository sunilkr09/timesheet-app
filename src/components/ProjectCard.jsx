import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Button } from '@chakra-ui/react'

const projects = [
    {
        id: "1",
        projectName: "project 1"
    },
    {
        id: "2",
        projectName: "project 2"
    }
];

export default function ProjectCard() {
    return (
        <div>
            {projects.map((project, index) => {
                return (
                    <Card variant="outline" size="sm" key={index}>
                        <CardHeader>{project.id}</CardHeader>
                        <CardBody><Text color="purple">{project.projectName}</Text></CardBody>
                        <CardFooter><Button>Add Task</Button></CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}