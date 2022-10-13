import React from 'react';
import {View, Text, Image} from 'react-native';

const News = props => {
  return (
    <View className="h-screen">
        <View className="pt-20 bg-white ">
          <Text className="text-xl font-bold ml-2 mb-4">
            Сервисы
          </Text>
        </View>
        <View className="px-4 pb-12 bg-white">
          <View className="relative flex flex-row">
            <View className="w-20 h-20 p-1 mr-2 rounded-full">
              <Image className="w-full h-full bg-gray-200 rounded-full" source="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
              <Text className="mt-2 text-sm select-none text-center">
                Text
              </Text>
            </View>
            <View className="w-20 h-20 p-1 mr-2 rounded-full">
              <Image className="w-full h-full bg-gray-100 rounded-full" source="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
              <Text className="mt-2 text-sm select-none text-center">
                Text
              </Text>
            </View>
            <View className="w-20 h-20 p-1 mr-2 rounded-full">
              <Image className="w-full h-full bg-gray-100 rounded-full" source="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
              <Text className="mt-2 text-sm select-none text-center">
                Text
              </Text>
            </View>
            <View className="w-20 h-20 p-1 mr-2 rounded-full">
              <Image className="w-full h-full bg-gray-100 rounded-full" source="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
              <Text className="mt-2 text-sm select-none text-center">
                Text
              </Text>
            </View>
            <View className="w-20 h-20 p-1 mr-2 rounded-full">
              <Image className="w-full h-full bg-gray-100 rounded-full" source="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
              <Text className="mt-2 text-sm select-none text-center">
                Text
              </Text>
            </View>
          </View>
        </View>
        <View className="bg-gray-700 mt-4">
        </View>
        <View className="mt-6 bg-white">
          <Text className="">asdasd</Text>
        </View>
    </View>
  );
};


export default News;
