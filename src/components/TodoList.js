import React from 'react'
import {VStack, HStack, Text, IconButton, Spacer, Badge} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";

function TodoList({todos, deleteTodo}) {

    if (!todos.length) {
        return(
            <Badge fontSize="sm" textTransform="none" colorScheme="green" p="4" m="4" borderRadius="lg">
                Masih kosong nih, ayo tambahkan daftar kegiatan! 😊
            </Badge>
        )
    }

    return (
        <VStack
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw"}}
            alignItems="stretch"
        >
            {todos.map(todo => (
                <HStack mb={["0.75rem !important"]}  
                    borderRadius="2xl"
                    p="4" 
                    borderWidth="2px" 
                    borderColor="gray.100" 
                    _hover={{transform: "scale(1.03, 1.03)", transitionDuration: "0.3s", transitionTimingFunction: "ease-out", boxShadow:"xl"}}
                    key={todo.id}
                >
                    <Text overflowWrap="anywhere" fontSize="xl" fontWeight="semibold">{todo.body}</Text>
                    <Spacer />
                    <IconButton 
                        icon={<FaTrash />} 
                        isRound="true" 
                        onClick={() => deleteTodo(todo.id)} 
                    />
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList
