import React, { useRef, useState } from "react";
import CalendarStrip from "react-native-calendar-strip";
import Button from "./app/components/Button";
import Screen from "./app/components/Screen";
import Text from "./app/components/Text";

const currentDate = Date.now();
const twoWeeksDate = currentDate + 12096e5;

export default function App() {
  // const [selectedDate, setSelectedDate] = useState(twoWeeksDate);
  const calendarRef = useRef();

  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <Screen>
      <Text> Start Date : default to today</Text>
      <Text> How long? : default to a week</Text>
      <CalendarStrip
        ref={calendarRef}
        // scrollable
        selectedDate={currentDate}
        //start on current date
        useIsoWeekday={false}
        style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={"#3343CE"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        iconContainer={{ flex: 0.1 }}
      />
      <Button
        title="Today"
        onPress={() => {
          calendarRef.current.setSelectedDate(currentDate);
          calendarRef.current.updateWeekView(currentDate);
        }}
      />
    </Screen>
  );
}
