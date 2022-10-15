import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from "react-native";
import Svg, {Defs, LinearGradient, Path, Stop} from "react-native-svg";

const Tab = createBottomTabNavigator();

const Login = props => {
  return (
        <View>
            <Svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.0497C0 0.921247 5.9732 -1.87227 9.89182 1.42354L28.9249 17.4316L14.4162 23.7395C12.2532 24.6799 12.2532 27.7557 14.4162 28.6961L20.6011 31.3851V34.4969C20.6011 39.1919 24.3969 42.9979 29.0792 42.9979C33.7616 42.9979 37.5574 39.1919 37.5574 34.4969V31.3489L43.5838 28.7288C45.7468 27.7884 45.7468 24.7126 43.5838 23.7721L29.0495 17.4531L48.1082 1.42354C52.0268 -1.87227 58 0.921251 58 6.0497V30.9216C58 46.9812 45.0163 60 29 60C12.9837 60 0 46.9812 0 30.9216V6.0497Z" fill="url(#paint0_linear_239_2071)"/>
                <Defs>
                    <LinearGradient id="paint0_linear_239_2071" x1="-14.0469" y1="-2.34375" x2="69.0564" y2="58.6915" gradientUnits="userSpaceOnUse">
                        <Stop stop-color="#5088FF"/>
                        <Stop offset="1" stop-color="#8F00FF"/>
                    </LinearGradient>
                </Defs>
            </Svg>

        </View>
  );
};

export default Login;
