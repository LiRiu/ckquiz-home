import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaTelegram, FaBlog } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const githubLink = 'https://github.com/liriu/ckquiz-app';
  const telegramLink = 'https://t.me/LeezCoin';
  const docsLink = 'https://liriu.notion.site/CKQuiz-Docs-94d7897ddab04fdbae907194536f889d';

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 CKQuiz. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Blog'} href={docsLink}>
            <FaBlog />
          </SocialButton>
          <SocialButton label={'Github'} href={githubLink}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Telegram'} href={telegramLink}>
            <FaTelegram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}