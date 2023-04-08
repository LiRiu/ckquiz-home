import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(3));

features[0] = {
  id: 0,
  title: 'Optimize UI/UX',
  text: 'The project is still in the development stage and needs unit testing and integrated testing.',
};

features[1] = {
  id: 1,
  title: 'Iterative ZKP scheme',
  text: 'The current Quiz uses a simple Schnorr scheme to hide the answers. This prevents attacks such as plagiarism if the answers are made public on the chain. However, the Schonrr scheme can only make verifier trust prover, not to third party observers. This forces users to trust Quiz developers.',
};

features[2] = {
  id: 2,
  title: 'Quiz parameter customisation',
  text: 'Currently Quiz is not customizable in terms of total reward amount, single bonus amount, CKB or NFT.',
};

features[3] = {
  id: 3,
  title: 'Access to mainnet',
  text: 'Currently Quiz rewards and validates on the Godwoken testnet',
};

features[4] = {
  id: 4,
  title: 'Access to JoyID',
  text: 'Quiz currently uses Metamask, which introduces some interaction usability and security issues',
};

features[5] = {
  id: 5,
  title: 'Nice Skins',
  text: 'Support for challenge widget custom css',
};

features[6] = {
  id: 6,
  title: 'Replace the two illustrations on the Home Page',
  text: 'Yes, these two illustrations are characters from the DNF, which I don\'t have the rights, shame on me...',
};

features[7] = {
  id: 7,
  title: 'Healthy Economic Model',
  text: 'The current economic model has not been carefully designed, and the development work is all for love',
};

export default function GridListWithHeading() {
  return (
    <Box p={4} mt={100} mb={300} id="roadmap">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>RoadMap</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          CKQuiz is open-source. Everyone is welcome to participate in the optimisation.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}