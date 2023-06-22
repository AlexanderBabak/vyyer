import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

import { getAuth } from "../api/services";
import { showNotification } from "../helpers/showNotification";
import { AuthData } from "../types/data";
import { RootStackParamList } from "../types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const useAuth = () => {
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values: AuthData) => {
    try {
      setIsLoading(true);
      const accessToken = await getAuth(values);
      await AsyncStorage.setItem("token", accessToken);
      setIsLoading(false);
      navigation.replace("Main");
    } catch (error: any) {
      setIsLoading(false);
      showNotification(`Authorisation error: ${error?.message}`);
    }
  };
  return { handleSubmit, isLoading };
};

export default useAuth;
