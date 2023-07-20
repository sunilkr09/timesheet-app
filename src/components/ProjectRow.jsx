import React from "react";
import {
    Tr,
    Td,
    Select,
    NumberInput,
    NumberInputField,
    Button
} from '@chakra-ui/react';

export default function ProjectRow(props) {
    return (
        <Tr>
            <Td>
                <Select placeholder='Select option' objectPosition='center' width='2xs'>
                    {props.tasks.map((t, k) => {
                        return <option value={t.id + '/' + t.name} key={k}>{t.id + '/' + t.name}</option>
                    })}
                </Select>
            </Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><NumberInput defaultValue={0} min={0}><NumberInputField width='full' /></NumberInput></Td>
            <Td><Button colorScheme='blue' size='md'>Save</Button></Td>
        </Tr>
    )
}