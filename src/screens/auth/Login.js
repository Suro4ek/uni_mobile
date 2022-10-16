import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, FlatList, Text, TextInput, View} from "react-native";
import Svg, {Defs, LinearGradient, Path, Stop} from "react-native-svg";
import UserModel from "../../app/models/UserModel";

const Tab = createBottomTabNavigator();

const Login = props => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const validateInput = () => {
        let errors = false;

        if (!login || login.length === 0) {
            errors = true;
        }

        if (!password || password.length === 0) {
            errors = true;
        }

        return !errors;
    };

    const authenticateUser = async () => {
        if (validateInput()) {
            setLoading(true);
            const user = new UserModel(login, password);
            try {
                await user.login();
            } catch (err) {
                setError("Пароль или логин не правильный");
                setVisible(true);
                setLoading(false);
            }
        } else {
            setError('Заполните все поля.');
            setVisible(true);
            setLoading(false);
        }
    };

  return (
      <View className="h-screen">
          <View className="ios:pt-56 android:pt-10 bg-white items-center">
              <Svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.0497C0 0.921247 5.9732 -1.87227 9.89182 1.42354L28.9249 17.4316L14.4162 23.7395C12.2532 24.6799 12.2532 27.7557 14.4162 28.6961L20.6011 31.3851V34.4969C20.6011 39.1919 24.3969 42.9979 29.0792 42.9979C33.7616 42.9979 37.5574 39.1919 37.5574 34.4969V31.3489L43.5838 28.7288C45.7468 27.7884 45.7468 24.7126 43.5838 23.7721L29.0495 17.4531L48.1082 1.42354C52.0268 -1.87227 58 0.921251 58 6.0497V30.9216C58 46.9812 45.0163 60 29 60C12.9837 60 0 46.9812 0 30.9216V6.0497Z" fill="#5933CB"/>
                  <Defs>
                      <LinearGradient id="paint0_linear_239_2071" x1="-14.0469" y1="-2.34375" x2="69.0564" y2="58.6915" gradientUnits="userSpaceOnUse">
                          <Stop stop-color="#5088FF"/>
                          <Stop offset="1" stop-color="#5933CB"/>
                      </LinearGradient>
                  </Defs>
              </Svg>
              <View className="mt-4">
                  <Svg width="86" height="34" viewBox="0 0 86 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M0 22.3497V4.25191C0 1.90364 1.86563 0 4.167 0C6.46837 0 8.334 1.90364 8.334 4.25191V21.5413C8.334 24.331 9.85491 25.7259 12.8967 25.7259C15.9386 25.7259 17.4595 24.331 17.4595 21.5413V4.25191C17.4595 1.90364 19.3251 0 21.6265 0C23.9279 0 25.7935 1.90364 25.7935 4.25191V22.3497C25.7935 25.8368 24.583 28.6583 22.1619 30.814C19.8029 32.938 16.7146 34 12.8967 34C9.07894 34 5.97503 32.938 3.58502 30.814C1.19501 28.6583 0 25.8368 0 22.3497Z" fill="#403F49"/>
                      <Path d="M56.3993 16.7385V4.22815C56.3993 1.89301 58.2545 0 60.543 0C62.8315 0 64.6867 1.89301 64.6867 4.22815V28.9741C64.6867 31.3559 62.7944 33.2867 60.4602 33.2867C59.0821 33.2867 57.7906 32.6011 56.9995 31.4497L46.7616 16.5483V29.0348C46.7616 31.3831 44.896 33.2867 42.5946 33.2867C40.2932 33.2867 38.4276 31.3831 38.4276 29.0348V4.34382C38.4276 1.9448 40.3336 0 42.6847 0C44.0728 0 45.3737 0.690546 46.1705 1.85032L56.3993 16.7385Z" fill="#403F49"/>
                      <Path d="M81.833 33.2867C79.5316 33.2867 77.666 31.3831 77.666 29.0348V16.883C77.666 14.5348 79.5316 12.6311 81.833 12.6311C84.1344 12.6311 86 14.5348 86 16.883V29.0348C86 31.3831 84.1344 33.2867 81.833 33.2867Z" fill="#403F49"/>
                      <Path d="M81.7802 8.39598C79.508 8.39598 77.666 6.51648 77.666 4.19799C77.666 1.8795 79.508 0 81.7802 0H81.8858C84.158 0 86 1.8795 86 4.19799C86 6.51648 84.158 8.39598 81.8858 8.39598H81.7802Z" fill="#403F49"/>
                  </Svg>
              </View>
          </View>
          <View className="px-4 mt-8">
              <Text>
                  Логин
              </Text>
              <TextInput
                  onChangeText={text => setLogin(text)}
                  value={login}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mt-4"
              />
              <Text className="mt-4">
                  Пароль
              </Text>
              <TextInput
                  onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 mt-4"
              />
              <Button
                  title={"Войти"}
                  className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                  onPress={() => authenticateUser()}
              />
          </View>
          <View>
              <Button title={"Забыли пароль?"} className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"/>
          </View>
          <Text className={loading ? "text-center" : "hidden"}>
              Loading...
          </Text>
          <Text className={visible ? "text-center" : "hidden"}>
              {error}
          </Text>
          <View className="mt-36 ">
              <Button title={"Регистрация"} className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"/>
          </View>
        </View>
  );
};

export default Login;
