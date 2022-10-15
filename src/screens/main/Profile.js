import React from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight, Button} from 'react-native';

const Profile = props => {
  return (
      <View className="h-screen">
        <View className="ios:pt-20 android:pt-10 bg-white">
          <Text className="text-xl font-bold ml-2 mb-4">
            Профиль
          </Text>
        </View>
        <View className="mt-6 flex items-center w-full">
          <View className="rounded-full bg-gray-700 w-36 h-36">
            <Image className="rounded-full bg-gray-700 w-36 h-36" source={{uri: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg"}}/>
          </View>
          <Text className="mt-4 font-bold text-2xl">
            Иванов Иван Иванович
          </Text>
          <View className="w-80">
            <View className="rounded-t-2xl bg-white w-full flex flex-row px-4 justify-between">
              <View className="my-4 flex flex-row">
                <Text className="text-xl">
                  Дата рождения:
                  </Text>
                <Text className="text-xl ml-2 mt-0.5">
                  01.01.2000
                </Text>
              </View>
            </View>
            <View className="bg-white w-full flex flex-row px-4 justify-between">
              <View className="my-4 flex flex-row">
                <Text className="text-xl">
                  Группа:
                </Text>
                <Text className="text-xl ml-2 mt-0.5">
                  Б-ПМИ-20
                </Text>
              </View>
            </View>
            <View className="bg-white w-full flex flex-row px-4 justify-between">
              <View className="my-4 flex flex-row">
                <Text className="text-xl">
                  Форму обучение:
                </Text>
                <Text className="text-xl ml-2 mt-0.5">
                 Очная
                </Text>
              </View>
            </View>
            <View className="bg-white w-full flex flex-row px-4 justify-between">
              <View className="my-4 flex flex-row">
                <Text className="text-xl">
                  Код:
                </Text>
                <Text className="text-xl ml-2 mt-0.5">
                  123456789
                </Text>
              </View>
            </View>
            <View className="rounded-b-2xl bg-white w-full  px-4 justify-between">
              <View className="my-4 flex flex-row">
                <Text className="text-xl">
                  Статус:
                </Text>
                <Text className="text-lg ml-2">
                  В академическом отпуске
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-16">
            <Button title={"Выйти"} onPress={() => props.navigation.navigate('Login')}/>
          </View>
        </View>
      </View>
  );
};


export default Profile;
