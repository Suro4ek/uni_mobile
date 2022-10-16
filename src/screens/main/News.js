import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import InstaStory from 'react-native-insta-story';
import Svg, {G, Mask, Path} from "react-native-svg";

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

const newsData = [
    {
        id: 1,
        title: "Новость 1",

    }
]
const NewsItem = ({item}) => {
    return (
        <View className="mt-6 bg-white px-8">
            <View className="pt-4 flex flex-wrap flex-row">
                <View className="rounded-full w-12 h-12">
                    <Image  className="rounded-full bg-gray-700 w-12 h-12" source={{uri: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg"}} style={{width: "100%"}}/>
                </View>
                <View>
                    <Text className="ml-2 text-xl">
                        {item.Title}
                    </Text>
                    <Text className="ml-2 text-sm text-gray-700">
                        19:00 10 Октября
                    </Text>
                </View>
            </View>
            <View className="mt-4">
                <Text>
                    {item.Content}
                </Text>
                {
                    item.Photo.length > 0 ?  <Image source={{uri: "https://surobackend.hyneo.ru"+item.Photo[0].url}} style={{width: "100%", height: 200}}/> : ""
                }
            </View>
            <View className="my-4 flex flex-row">
                <View className="bg-gray-300 rounded-2xl w-12 h-6 ">
                    <View className="flex flex-row items-center px-2">
                        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Mask id="mask0_289_50" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="14" height="14">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.33334 2.49993H14.9817V15.5006H1.33334V2.49993Z" fill="white"/>
                            </Mask>
                            <G mask="url(#mask0_289_50)">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.54913 8.58199C3.4838 11.49 7.17646 13.8413 8.1578 14.4233C9.14246 13.8353 12.8618 11.458 13.7665 8.58466C14.3605 6.72733 13.8091 4.37466 11.6185 3.66866C10.5571 3.32799 9.31913 3.53533 8.46446 4.19666C8.2858 4.33399 8.0378 4.33666 7.8578 4.20066C6.95246 3.51999 5.7698 3.32066 4.6918 3.66866C2.50446 4.37399 1.95513 6.72666 2.54913 8.58199ZM8.15846 15.5007C8.0758 15.5007 7.9938 15.4807 7.91913 15.44C7.71046 15.326 2.79513 12.6167 1.59713 8.88733C1.59646 8.88733 1.59646 8.88666 1.59646 8.88666C0.844465 6.53866 1.6818 3.58799 4.38513 2.71666C5.65446 2.30599 7.0378 2.48666 8.15646 3.19266C9.24046 2.50733 10.6805 2.31799 11.9245 2.71666C14.6305 3.58933 15.4705 6.53933 14.7191 8.88666C13.5598 12.5733 8.60846 15.3233 8.39846 15.4387C8.3238 15.48 8.24113 15.5007 8.15846 15.5007Z" fill="#6A6FA0"/>
                            </G>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.1025 7.58326C11.8445 7.58326 11.6258 7.38526 11.6045 7.12393C11.5605 6.57593 11.1938 6.11326 10.6718 5.9446C10.4085 5.85926 10.2645 5.57726 10.3491 5.31526C10.4351 5.0526 10.7145 4.90993 10.9785 4.9926C11.8871 5.2866 12.5238 6.09126 12.6018 7.0426C12.6238 7.31793 12.4191 7.55926 12.1438 7.58126C12.1298 7.5826 12.1165 7.58326 12.1025 7.58326Z" fill="#6A6FA0"/>
                        </Svg>
                        <Text className="text-center mt-1 ml-2">
                            {item.Like}
                        </Text>
                    </View>
                </View>
                <View className="ml-2 bg-gray-300 rounded-2xl w-12 h-6">
                    <View className="flex flex-row items-center px-2">
                        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Mask id="mask0_289_60" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="15" height="15">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.666656 1.16687H14.9953V15.4961H0.666656V1.16687Z" fill="white"/>
                            </Mask>
                            <G mask="url(#mask0_289_60)">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.07225 13.6169C4.45892 13.6169 4.82358 13.7635 5.20958 13.9189C7.57425 15.0122 10.3709 14.5149 12.1929 12.6935C14.5969 10.2882 14.5969 6.37554 12.1929 3.97154C11.0289 2.80754 9.48092 2.16687 7.83292 2.16687C6.18425 2.16687 4.63558 2.8082 3.47225 3.9722C1.64958 5.79354 1.15358 8.5902 2.23692 10.9322C2.39292 11.3182 2.54358 11.6942 2.54358 12.0849C2.54358 12.4749 2.40958 12.8675 2.29158 13.2142C2.19425 13.4995 2.04692 13.9302 2.14158 14.0249C2.23425 14.1209 2.66758 13.9695 2.95358 13.8715C3.29692 13.7542 3.68625 13.6195 4.07225 13.6169ZM7.81625 15.4962C6.79758 15.4962 5.77225 15.2809 4.81292 14.8369C4.53025 14.7235 4.26558 14.6169 4.07558 14.6169C3.85692 14.6182 3.56292 14.7195 3.27892 14.8175C2.69625 15.0175 1.97092 15.2669 1.43425 14.7322C0.899584 14.1969 1.14625 13.4735 1.34492 12.8915C1.44292 12.6049 1.54358 12.3089 1.54358 12.0849C1.54358 11.9009 1.45492 11.6662 1.31892 11.3282C0.0702507 8.63154 0.647584 5.38154 2.76558 3.26487C4.11758 1.9122 5.91692 1.16687 7.83225 1.16687C9.74758 1.16687 11.5476 1.91154 12.8996 3.2642C15.6943 6.05887 15.6943 10.6055 12.8996 13.4002C11.5296 14.7709 9.68492 15.4962 7.81625 15.4962Z" fill="#6A6FA0"/>
                            </G>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.4642 9.27533C10.0962 9.27533 9.79486 8.97733 9.79486 8.60867C9.79486 8.24 10.0902 7.942 10.4582 7.942H10.4642C10.8322 7.942 11.1309 8.24 11.1309 8.60867C11.1309 8.97733 10.8322 9.27533 10.4642 9.27533Z" fill="#6A6FA0"/>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.79165 9.27533C7.42365 9.27533 7.12231 8.97733 7.12231 8.60867C7.12231 8.24 7.41698 7.942 7.78565 7.942H7.79165C8.15965 7.942 8.45831 8.24 8.45831 8.60867C8.45831 8.97733 8.15965 9.27533 7.79165 9.27533Z" fill="#6A6FA0"/>
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.11886 9.27533C4.75086 9.27533 4.44952 8.97733 4.44952 8.60867C4.44952 8.24 4.74486 7.942 5.11286 7.942H5.11886C5.48686 7.942 5.78552 8.24 5.78552 8.60867C5.78552 8.97733 5.48686 9.27533 5.11886 9.27533Z" fill="#6A6FA0"/>
                        </Svg>
                        <Text className="text-center mt-1 ml-2">
                            {item.comments.length}
                        </Text>
                    </View>
                </View>
                <View className="ml-2 bg-gray-300 rounded-2xl w-12 h-6">
                    <View className="flex flex-row items-center px-2">
                        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11.3333 2.16534C11.7222 2.1653 12.105 2.26241 12.4468 2.44786C12.7887 2.6333 13.0788 2.9012 13.2908 3.22723C13.5028 3.55326 13.63 3.92709 13.6609 4.31477C13.6917 4.70245 13.6252 5.09169 13.4675 5.44715C13.3097 5.80261 13.0656 6.11303 12.7574 6.35022C12.4492 6.5874 12.0866 6.74383 11.7026 6.80531C11.3186 6.86679 10.9253 6.83137 10.5585 6.70226C10.1916 6.57315 9.86285 6.35444 9.60199 6.066L6.56332 7.802C6.70565 8.25623 6.70565 8.74311 6.56332 9.19734L9.60132 10.9347C9.98759 10.5079 10.5179 10.2388 11.0905 10.1792C11.663 10.1195 12.2374 10.2735 12.7034 10.6116C13.1693 10.9496 13.4939 11.4479 13.6149 12.0107C13.7359 12.5735 13.6446 13.1611 13.3587 13.6607C13.0729 14.1604 12.6124 14.5368 12.066 14.7177C11.5195 14.8986 10.9254 14.8712 10.3979 14.6407C9.87035 14.4103 9.44655 13.9932 9.20785 13.4693C8.96916 12.9455 8.93241 12.3519 9.10466 11.8027L6.06666 10.0647C5.75024 10.4145 5.33525 10.6604 4.87637 10.7697C4.41749 10.8791 3.93625 10.8469 3.49603 10.6773C3.05582 10.5078 2.67729 10.2089 2.41031 9.81998C2.14333 9.43107 2.00043 8.9704 2.00043 8.49867C2.00043 8.02694 2.14333 7.56627 2.41031 7.17736C2.67729 6.78844 3.05582 6.48953 3.49603 6.31999C3.93625 6.15045 4.41749 6.11825 4.87637 6.22762C5.33525 6.33699 5.75024 6.5828 6.06666 6.93267L9.10466 5.19667C8.99536 4.84709 8.96985 4.4767 9.03018 4.11543C9.09051 3.75417 9.235 3.41217 9.45196 3.11707C9.66891 2.82198 9.95226 2.58207 10.2791 2.41673C10.6059 2.2514 10.9671 2.16528 11.3333 2.16534V2.16534ZM11.3333 11.1653C10.9793 11.1653 10.6399 11.306 10.3896 11.5563C10.1393 11.8065 9.99866 12.146 9.99866 12.5C9.99866 12.854 10.1393 13.1935 10.3896 13.4438C10.6399 13.6941 10.9793 13.8347 11.3333 13.8347C11.6873 13.8347 12.0268 13.6941 12.2771 13.4438C12.5274 13.1935 12.668 12.854 12.668 12.5C12.668 12.146 12.5274 11.8065 12.2771 11.5563C12.0268 11.306 11.6873 11.1653 11.3333 11.1653V11.1653ZM4.33466 7.16534C3.98068 7.16534 3.6412 7.30595 3.39091 7.55625C3.14061 7.80655 2.99999 8.14603 2.99999 8.5C2.99999 8.85398 3.14061 9.19346 3.39091 9.44375C3.6412 9.69405 3.98068 9.83467 4.33466 9.83467C4.68863 9.83467 5.02811 9.69405 5.27841 9.44375C5.52871 9.19346 5.66932 8.85398 5.66932 8.5C5.66932 8.14603 5.52871 7.80655 5.27841 7.55625C5.02811 7.30595 4.68863 7.16534 4.33466 7.16534V7.16534ZM11.3333 3.16534C10.9793 3.16534 10.6399 3.30595 10.3896 3.55625C10.1393 3.80655 9.99866 4.14603 9.99866 4.5C9.99866 4.85398 10.1393 5.19346 10.3896 5.44376C10.6399 5.69405 10.9793 5.83467 11.3333 5.83467C11.6873 5.83467 12.0268 5.69405 12.2771 5.44376C12.5274 5.19346 12.668 4.85398 12.668 4.5C12.668 4.14603 12.5274 3.80655 12.2771 3.55625C12.0268 3.30595 11.6873 3.16534 11.3333 3.16534V3.16534Z" fill="#6A6FA0"/>
                        </Svg>

                        <Text className="text-center mt-1 ml-2">
                            1
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

let newsses = []
const News = props => {
    const[news, setNews] = useState([])
    const getNews = React.useCallback(async () => {
        const url = `https://surobackend.hyneo.ru/newsses`;
        const response = await fetch(url);
        newsses = await response.json();
        setNews(newsses)
    })
    useEffect(() => {
        getNews();
    }, [])
  return (
    <View className="">
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
         <View className="mb-[420px]">
             <FlatList data={newsses} renderItem={NewsItem} keyExtractor={item => item.id}/>
         </View>
    </View>
  );
};


export default News;
