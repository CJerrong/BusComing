import React from 'react'
import { useState } from 'react'
import { Button, TextInput, Title, Text, ActionIcon, Container, Group, FocusTrap } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const SearchScreen: React.FC = () => {
    const [value, setValue] = useState('')

    return (
        <Group align="center">
            <Link to="/" align="bottom">
                <ActionIcon variant="filled">
                    <IconArrowBackUp size={24} />
                </ActionIcon>
            </Link>
            <FocusTrap active={'Activate'}>
            <TextInput
                placeholder="Search busses and bus stops"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                data-autofocus />
            </FocusTrap>
        </Group>
    )
}

export default SearchScreen