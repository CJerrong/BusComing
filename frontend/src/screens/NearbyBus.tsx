import React from 'react'
import { useState } from 'react'
import { Button, TextInput, Title, Text, ActionIcon, Container, Group, FocusTrap, Stack, Flex } from '@mantine/core'
import { IconSearch, IconArrowBackUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const NearbyBus: React.FC = () => {
    const [value, setValue] = useState('')

    return (
        <Stack>
            <Group align="center">
                <Link to="/" justify="flex-start" align="center">
                    <ActionIcon variant="filled">
                        <IconArrowBackUp size={24} />
                    </ActionIcon>
                </Link>
                <Title order={2} align="center">Nearby bus stops</Title>
                <ActionIcon variant="filled" align="center">
                    <IconSearch size={24} />
                </ActionIcon>
            </Group>
            <Flex
                gap="sm"
                direction="column"
                align="flex-start">
                <Button fullWidth>
                    Blk 1..
                </Button>
                <Button fullWidth>
                    Blk 2..
                </Button>
            </Flex>
        </Stack>
    )
}

export default NearbyBus