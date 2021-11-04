import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {Heading, VStack, IconButton, useColorMode} from "@chakra-ui/react"
import {FaSun, FaMoon} from "react-icons/fa"
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useToast } from "@chakra-ui/react"

function App() {

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [{id: "1", body:"contoh to do list"}]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos);
  }

  const toast = useToast()

  function addTodo(todo) {
    setTodos([...todos, todo]);
    toast({
      title: `${todo.body} telah berhasil ditambahkan`,
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
        isRound='true' 
        size="lg" 
        alignSelf="flex-end" 
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold" 
        mb={["1rem !important"]}
        size="3xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo List!
      </Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
    <Footer />
    </>
  );
}

export default App;
