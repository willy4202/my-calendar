import { FlatList, View } from "react-native";
import React, { useState } from "react";
import dayjs from "dayjs";
import { getCalendarColumns, getDayColor } from "./utils";
import Column from "./Column";
import ListHeader from "./Header";
import { useCalendar } from "./hook/useCalendar";

const Calendar = ({ selectedDate, setSelectedDate }) => {
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
    const isToday = dayjs().isSame(date, "date");

    return (
      <Column
        color={color}
        opacity={opacity}
        text={dateText}
        onPress={onPress}
        isSelected={isSelected}
        isToday={isToday}
      />
    );
  };

  const ListHeaderComponent = (
    <ListHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
  );

  return (
    <View style={{ flex: 1 }}>
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
