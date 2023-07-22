import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    Button
} from '@chakra-ui/react';

const projects = [
    {
        id: 1,
        name: "Project1"
    },
    {
        id: 2,
        name: "Project2"
    },
    {
        id: 3,
        name: "Project3"
    }
];

export default function ProjectCard() {
    //const [projects, addProject] = useState(p);
    return (
        <div>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <SimpleGrid columns={9} spacing={5}>
                    <Select placeholder='Select Project'>
                        {projects.map((p, i) => <option key={p.id}>{p.id + '\\' + p.name}</option>)}
                    </Select>
                    <NumberInput min={0}><NumberInputField placeholder='Sun' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Mon' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Tue' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Wed' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Thus' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Fri' textAlign="center" /></NumberInput>
                    <NumberInput min={0}><NumberInputField placeholder='Sat' textAlign="center" /></NumberInput>
                    <Button
                        colorScheme='teal'
                        //isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Save
                    </Button>
                </SimpleGrid>
            </FormControl>
        </div>
    );
}
