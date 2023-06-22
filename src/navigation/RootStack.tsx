import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Authorization } from "../screens/Authorization/Authorization";
import { MainScreen } from "../screens/Main/MainScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Authorization} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
