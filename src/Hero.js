import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function CallToActionWithVideo() {
  const appLink = "https://ckquiz-app.vercel.app/";
  const docLink = "https://liriu.notion.site/CKQuiz-Docs-94d7897ddab04fdbae907194536f889d";
  
  return (
    <Container maxW={'7xl'} mt={100} mb={230}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.300',
                zIndex: -1,
              }}>
              Earn CKB,
            </Text>
            <br />
            <Text as={'span'} color={'green.300'}>
              By Challenge Quiz!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            CKQuiz is a widget that allows reader to earn CKB by challenging the quiz you made.
            It's based on the Godwoken chain and the Schonrr ZKP protocol to protect users' rights
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green.500'}
              bg={'green.300'}
              _hover={{ bg: 'green.500' }}
              onClick={()=>{window.open(appLink)}}
              >
              Get Start
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<FaGithub />}
              onClick={()=>{window.open(docLink)}}
            >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'100%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('green.100')}
          />
          <Box
            position={'relative'}
            height={'550px'}
            rounded={'2xl'}
            // boxShadow={'2xl'}
            width={'full'}
            left={'20%'}
            overflow={'hidden'}>
            <Image
              alt={'Librarian Image'}
              fit={'cover'}
              align={'top'}
              w={'100%'}
              h={'98%'}
              src={
                'librarian.png'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};