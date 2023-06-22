import { Formik } from "formik";
import { Center, Image, VStack } from "native-base";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as yup from "yup";

import { InputStyled, TextButton } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { useAuth } from "../../hooks";

const loginSchema = yup.object({
  userName: yup
    .string()
    .required("No username provided")
    .min(6, "Username is too short - 8 chars minimum"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - 8 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
});

export const Authorization = () => {
  const { isLoading, handleSubmit } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <VStack paddingX={SIZES.radius} space={SIZES.base}>
            <Center>
              <Image
                source={icons.vyyerLogo}
                width={70}
                height={70}
                resizeMode="contain"
                alt="logo"
              />
            </Center>
            <Formik
              initialValues={{ userName: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={values => {
                Keyboard.dismiss();
                handleSubmit(values);
              }}
            >
              {props => (
                <VStack space={4}>
                  <InputStyled
                    value={props.values.userName}
                    onChangeText={props.handleChange("userName")}
                    onBlur={props.handleBlur("userName")}
                    placeholder="Enter your username"
                    keyboardType="email-address"
                    isInvalid={
                      !!props.errors.userName && !!props.touched.userName
                    }
                    errorMessage={props.errors.userName}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <InputStyled
                    value={props.values.password}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    placeholder="Enter your password"
                    isInvalid={
                      !!props.errors.password && !!props.touched.password
                    }
                    errorMessage={props.errors.password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                  />
                  <TextButton
                    onPress={props.handleSubmit}
                    labelStyle={{ fontSize: 20 }}
                    containerStyle={styles.buttonStyle}
                    isLoading={isLoading}
                  >
                    Login
                  </TextButton>
                </VStack>
              )}
            </Formik>
          </VStack>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  buttonStyle: {
    height: 55,
    marginTop: SIZES.radius,
    backgroundColor: COLORS.black,
  },
});
