import { FlatList, View } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { getCalendarColumns, getDayColor } from "./utils";
import Column from "./Column";
import ListHeader from "./Header";

const Calendar = ({ now }) => {
  const columns = getCalendarColumns(now);

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const isCurrentMonth = dayjs(date).isSame(now, "month");
    const opacity = isCurrentMonth ? 1 : 0.3;
    let color = getDayColor(day);

    return <Column color={color} opacity={opacity} text={dateText} />;
  };

  return (
    <View>
      <FlatList
        data={columns}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader />}
      />
    </View>
  );
};

export default Calendar;
