import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import InstaStory from 'react-native-insta-story';

const data = [
    {
        user_id: 1,
        user_image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        user_name: "Test User",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },];


const News = props => {
  return (
    <View className="h-screen">
        <View className="ios:pt-20 android:pt-10 bg-white ">
          <Text className="text-xl font-bold ml-2 mb-4">
            Новости
          </Text>
        </View>
        <View className="bg-white">
            <InstaStory data={data}
                        duration={5}
                        unPressedBorderColor={"#5933CB"}
                        pressedBorderColor={"gray"}
                        customSwipeUpComponent={<View></View>}/>
        </View>
        <View className="bg-gray-700 mt-4">
        </View>
        <View className="mt-6 bg-white px-8">
          <View className="pt-4 flex flex-wrap flex-row">
              <View className="rounded-full w-12 h-12">
                  <Image  className="rounded-full bg-gray-700 w-12 h-12" source={{uri: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg"}} style={{width: "100%"}}/>
              </View>
              <View>
                  <Text className="ml-2 text-xl">
                      IT-Club UNICODE
                  </Text>
                  <Text className="ml-2 text-sm text-gray-700">
                      19:00 10 Октября
                  </Text>
              </View>
          </View>
          <View className="mt-4">
              <Text>
                    Стартовал 7-дневний марафон разработок на тему "Разработка мобильных приложений на React Native"
               </Text>
              <Image source={{uri: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg"}} style={{width: "100%", height: 200}}/>
          </View>
          <View className="my-4 flex flex-row">
              <View className="bg-gray-300 rounded-2xl w-12 h-6">
                  <Text className="text-center mt-1">
                        1
                  </Text>
              </View>
              <View className="ml-2 bg-gray-300 rounded-2xl w-12 h-6">
                  <Text className="text-center mt-1">
                      1
                  </Text>
              </View>
              <View className="ml-2 bg-gray-300 rounded-2xl w-12 h-6">
                  <Text className="text-center mt-1">
                      1
                  </Text>
              </View>
          </View>
        </View>
    </View>
  );
};


export default News;
