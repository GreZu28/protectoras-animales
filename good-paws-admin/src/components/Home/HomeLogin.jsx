import { Text, Hide, Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Image, Input, Stack, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { colors } from "../../utils/colors";
import { PasswordField } from "./PasswordField";
import { useForm } from '../../hooks/useForm';

export const validationsForm = (form) => {
  let errors = {};
  if (!form.email.trim()) errors.email = "El campo email es requerido";
  if (!form.password.trim()) errors.password = "El campo contraseña es requerido";
  return errors;
};

const HomeLogin = () => {
  const initialObject = { email: '', password: '' };
  const { form, errors, handleChange, handleBlur, handleLogin } = useForm( initialObject, validationsForm );
  
  return (
    <Flex justifyContent={'center'} h={'100vh'} alignItems={'center'} w="100%">
      <Box w={['80%', '80%', '70%', '30%']} py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }} bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })} borderRadius={{ base: "none", sm: "xl" }}>
        <Stack spacing="6">
          <Image w={'15rem'} alt={'logo home'} src={'./logo.svg'} />
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input required onChange={handleChange} value={form.email} onBlur={handleBlur} focusBorderColor={colors.primarylight} id="email" placeholder='hola@open-devs.com' name='email' type="email" />
              {errors.email && <Text color={colors.warning}>{errors.email}</Text>}
            </FormControl>
            <PasswordField required onChange={handleChange} value={form.password} onBlur={handleBlur} />
            {errors.password && <Text color={colors.warning}>{errors.password}</Text>}
          </Stack>
          <HStack justify="space-between">
            <Checkbox colorScheme='teal' defaultChecked>Recordarme</Checkbox>
            <Button variant="link" color={colors.primarylight} size="sm">Olvidó su contraseña?</Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={handleLogin} color={colors.white} bg={colors.primary} variant="primary">Iniciar sesión</Button>
          </Stack>
          <Stack spacing="6">
            <Button variant="link" color={colors.primarylight}>Registrarse</Button>
          </Stack>
        </Stack>
      </Box>
      <Hide below='md'>
        <Image w={'50%'} alt={'illustration home'} src={'./illustration.svg'} />
      </Hide>
    </Flex>
  )
};

export default HomeLogin;