import React from 'react';
import {View, Text} from 'react-native';

const ServicesList = [
  "MOODLE",
  "ПГАС",
  "Факультативы",
  "БРС",
  "ДО",
  "Клиника МИ",
  "Карта СВФУ",
  "Обратная связь",
]

const ServerListComponents = ServicesList.map((item, index) =>
    (
  <View className="w-24 h-24 p-1 mr-8 rounded-xl bg-white mt-8" key={index}>
      <Text className="text-center mt-10">{item}</Text>
  </View>
))

const Services = props => {
  return (
      <View className="h-screen">
        <View className="ios:pt-20 android:pt-10 bg-white ">
          <Text className="text-xl font-bold ml-2 mb-4">
            Сервисы
          </Text>
        </View>
        <View className="mt-4 flex flex-row flex-wrap mx-4 w-full">
          {ServerListComponents}
        </View>
      </View>
  );
};


export default Services;
