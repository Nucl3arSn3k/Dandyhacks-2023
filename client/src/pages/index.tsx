import Head from 'next/head'
import { Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import test.tsx 
import Test from './test'

export default function Home() {
  const router = useRouter()

  return (
    
    <Flex>
         <Heading fontSize="5xl" mb={5} textAlign="center">
          Dandy Hacks
        </Heading>
        <Test/>
    </Flex>
  )
}
