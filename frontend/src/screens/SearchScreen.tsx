import React from 'react'
import { useState, useEffect } from 'react'
import { Button, TextInput, Title, Text, ActionIcon, Container, Group, FocusTrap, Flex, Stack } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const SearchScreen: React.FC = () => {
    const [search, setSearch] = useState('')
    const [busStops, setBusStops] = useState([])

    // Fetch bus stops on component mount
    useEffect(() => {
        const fetchBusStops = async () => {
            try {
                const response = await fetch('/api/bus_stops')

                if (!response.ok) {
                    throw new Error('Failed to fetch bus stops')
                }

                const data = response.json()
                setBusStops(data)
            } catch (error) {
                console.error('Error fetching bus stops', error)
            }
        }
    }, [])

    const filteredStops = busStops.filter(stop =>
        stop.Description.toLowerCase().includes(search.toLowerCase()) ||
        stop.BusStopCode.includes(search) ||
        stop.RoadName.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Flex>
            <Group align="center">
                <Link to="/">
                    <ActionIcon variant="filled">
                        <IconArrowBackUp size={24} />
                    </ActionIcon>
                </Link>
                <FocusTrap active={true}>
                <TextInput
                    placeholder="Search busses and bus stops"
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    data-autofocus />
                </FocusTrap>
            </Group>
            <Stack>
                {filteredStops.slice(0, 15).map(stop => (
                    
                ))}
            </Stack>
        </Flex>
    )
}

export default SearchScreen