import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Svg, {Circle, Path} from "react-native-svg";
import {Calendar} from "react-native-calendars/src/index";

const MonthsName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const TaskTable = props => {

  const[date, setDate] = useState(new Date());
  const[show, setShow] = useState(false);
  return (
      <View className="h-screen">
        <View className="ios:pt-20 android:pt-10 bg-white flex flew-wrap flex-row justify-between">
          <TouchableOpacity onPress={() =>
          {
            const date1 = new Date()
            date1.setDate(date.getDate()-1)
            setDate(date1)
          }}>
            <View className="ml-4 mt-2">
              <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0.999999 8C0.999543 7.76635 1.08092 7.53991 1.23 7.36L6.23 1.36C6.39974 1.15578 6.64365 1.02736 6.90808 1.00298C7.1725 0.978601 7.43578 1.06026 7.64 1.23C7.84422 1.39974 7.97264 1.64365 7.99702 1.90808C8.0214 2.1725 7.93974 2.43578 7.77 2.64L3.29 8L7.61 13.36C7.69306 13.4623 7.7551 13.58 7.79253 13.7063C7.82996 13.8327 7.84205 13.9652 7.82811 14.0962C7.81418 14.2272 7.77448 14.3542 7.7113 14.4698C7.64813 14.5855 7.56273 14.6875 7.46 14.77C7.35718 14.8616 7.23655 14.9309 7.10568 14.9737C6.9748 15.0165 6.8365 15.0318 6.69944 15.0187C6.56238 15.0055 6.4295 14.9642 6.30915 14.8974C6.18879 14.8305 6.08354 14.7395 6 14.63L1.17 8.63C1.04448 8.44492 0.984628 8.2231 0.999999 8Z" fill="#6B6D8C"/>
              </Svg>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row">
            <Text className="text-xl font-bold ml-2 mb-4 text-center">
              {date.getDate() + " "+ MonthsName[date.getMonth()]}
            </Text>
            <TouchableOpacity onPress={() => {
              setShow(!show)
            }}>
              <View className="ml-0.5 mt-0.5">
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M12 16C11.7663 16.0005 11.5399 15.9191 11.36 15.77L5.36 10.77C5.15578 10.6003 5.02736 10.3564 5.00298 10.0919C4.9786 9.8275 5.06026 9.56422 5.23 9.36C5.39974 9.15578 5.64365 9.02736 5.90808 9.00298C6.1725 8.9786 6.43578 9.06026 6.64 9.23L12 13.71L17.36 9.39C17.4623 9.30694 17.58 9.2449 17.7063 9.20747C17.8327 9.17004 17.9652 9.15795 18.0962 9.17189C18.2272 9.18582 18.3542 9.22552 18.4698 9.2887C18.5855 9.35187 18.6875 9.43727 18.77 9.54C18.8616 9.64282 18.9309 9.76345 18.9737 9.89432C19.0165 10.0252 19.0318 10.1635 19.0187 10.3006C19.0055 10.4376 18.9642 10.5705 18.8974 10.6909C18.8305 10.8112 18.7395 10.9165 18.63 11L12.63 15.83C12.4449 15.9555 12.2231 16.0154 12 16Z" fill="#999BBA"/>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
            const date1 = new Date()
            date1.setDate(date.getDate()+1)
            setDate(date1)
          }}>
            <View className="mr-4 mt-2">
              <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M8 8C8.00046 8.23365 7.91908 8.46009 7.77 8.64L2.77 14.64C2.60026 14.8442 2.35635 14.9726 2.09192 14.997C1.8275 15.0214 1.56422 14.9397 1.36 14.77C1.15578 14.6003 1.02736 14.3563 1.00298 14.0919C0.978601 13.8275 1.06026 13.5642 1.23 13.36L5.71 8L1.39 2.64C1.30694 2.53771 1.2449 2.42001 1.20747 2.29368C1.17004 2.16734 1.15795 2.03485 1.17189 1.90382C1.18582 1.77279 1.22552 1.64581 1.2887 1.53017C1.35187 1.41453 1.43727 1.31252 1.54 1.23C1.64282 1.13842 1.76345 1.06906 1.89432 1.02627C2.0252 0.983475 2.1635 0.968172 2.30056 0.981315C2.43762 0.994457 2.5705 1.03576 2.69085 1.10265C2.81121 1.16953 2.91646 1.26055 3 1.37L7.83 7.37C7.95552 7.55508 8.01537 7.7769 8 8Z" fill="#6B6D8C"/>
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
        <View className={show ? "" : "hidden"}>
          <Calendar
              onDayPress={day => {
                const date1 = new Date()
                date1.setDate(day.day)
                setDate(date1)
              }}
              monthFormat={'yyyy MM'}
              onMonthChange={month => {
                const date1 = new Date()
                date1.setMonth(month.month-1)
                setDate(date1)
              }}
              firstDay={1}
              onPressArrowLeft={subtractMonth => {
                subtractMonth()
              }}
              onPressArrowRight={addMonth => {
                addMonth()
              }}
              disableAllTouchEventsForDisabledDays={true}
          />
        </View>
        <View className="mt-4 ">

          <View className="flex gap-2">
            <View className="bg-white w-full p-2.5 flex flex-wrap flex-row">
              <View className="p-2">
                <Text>
                  08:00
                </Text>
                <Text>
                  09:35
                </Text>
              </View>
              <View className="ml-4 flex flex-col">
                <Text className="font-bold text-lg">
                  Иностранный язык
                </Text>
                <View className="flex flex-row flex-wrap">
                  <Text>
                    Сидоров В.Н
                  </Text>
                  <View className="mt-2 mx-2">
                    <Svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Circle cx="2" cy="2.5" r="2" fill="#A8AEC1"/>
                    </Svg>
                  </View>
                  <Text>
                    344 ауд.
                  </Text>
                </View>
              </View>
            </View>

            <View className="bg-white w-full p-2.5 flex flex-wrap flex-row">
              <View className="p-2">
                <Text>
                  08:00
                </Text>
                <Text>
                  09:35
                </Text>
              </View>
              <View className="ml-4 flex flex-col">
                <Text className="font-bold text-lg">
                  Иностранный язык
                </Text>
                <View className="flex flex-row flex-wrap">
                  <Text>
                    Сидоров В.Н
                  </Text>
                  <View className="mt-2 mx-2">
                    <Svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Circle cx="2" cy="2.5" r="2" fill="#A8AEC1"/>
                    </Svg>
                  </View>
                  <Text>
                    344 ауд.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
};


export default TaskTable;
