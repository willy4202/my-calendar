import { FlatList, View } from "react-native";
import React, { useState } from "react";
import dayjs from "dayjs";
import { getCalendarColumns, getDayColor } from "./utils";
import Column from "./Column";
import ListHeader from "./Header";
import { useCalendar } from "./hook/useCalendar";

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useCalendar();
  const columns = getCalendarColumns(selectedDate);

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const opacity = isCurrentMonth ? 1 : 0.3;
    let color = getDayColor(day);
    const onPress = () => {
      setSelectedDate(date);
    };
    const isSelected = dayjs(date).isSame(selectedDate, "date");

    return (
      <Column
        color={color}
        opacity={opacity}
        text={dateText}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  const ListHeaderComponent = (
    <ListHeader now={selectedDate} setSelectedDate={setSelectedDate} />
  );

  return (
    <View>
      <FlatList
        data={columns}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default Calendar;
