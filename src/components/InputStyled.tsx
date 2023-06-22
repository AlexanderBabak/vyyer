import { FormControl, Input } from "native-base";
import React, { ChangeEvent } from "react";
import { KeyboardTypeOptions } from "react-native";

import { COLORS, SIZES } from "../constants";

type Props = {
  placeholder: string;
  isInvalid: boolean;
  errorMessage: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  autoCorrect?: boolean | undefined;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
};

const InputStyled: React.FC<Props> = ({
  placeholder,
  isInvalid,
  errorMessage,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        height={SIZES.radius}
        backgroundColor="tranparent"
        fontFamily={"heading"}
        borderRadius={SIZES.radius}
        fontSize={SIZES.body3}
        color={COLORS.black}
        _focus={{ borderColor: COLORS.primary }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default InputStyled;
