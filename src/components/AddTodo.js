import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useToast } from "@chakra-ui/react";


function AddTodo({addTodo}) {

    const toast = useToast()
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: "Input Tidak Boleh Kosong!",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
            return
        }
        
        const todo = {
            id: nanoid(),
            body: content,
        }
        
        addTodo(todo)
        setContent('')
    }

    const [content, setContent] = useState('')

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input 
                    variant="filled" 
                    placeholder="add todo list" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <Button colorScheme="pink" px="8" type="submit">Add Todo</Button>
            </HStack>
        </form>
    );
}

export default AddTodo
