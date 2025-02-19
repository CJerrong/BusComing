import React from 'react'
import { Button, Container, Title, Text, TextInput, Stack, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

const HomeScreen: React.FC = () => {
    return (
        <Stack
        align="stretch"
        justify="flex-start"
        gap="md"
        fluid>
            <Title order={1}> Bus Timings </Title>
            <Link to ="/search">
                <TextInput
                    placeholder="Search busses and bus stops"
                />
            </Link>
            <Group>
                <Button variant="filled" size="md">
                    Get started
                </Button>
                <Link to="/nearby">
                    <Button variant="filled" size="md">
                        Search nearby
                    </Button>
                </Link>
            </Group>
        </Stack>
    )
}

export default HomeScreen