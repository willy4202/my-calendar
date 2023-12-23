import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Column from "./Column";
import { getDayColor, getDayText } from "./utils";
import dayjs from "dayjs";
import Margin from "./Margin";
import ArrowIcon from "./ArrowIcon";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useCalendar } from "./hook/useCalendar";

const ListHeader = ({ selectedDate, setSelectedDate }) => {
  const { isDatePickerVisible, showDatePicker, hideDatePicker, handleConfirm } =
    useCalendar();

  const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
  const subtract1Month = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(newSelectedDate);
  };
  const add1Month = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(newSelectedDate);
  };
  const onPressLeftArrow = subtract1Month;
  const onPressRightArrow = add1Month;

  return (
    <View>
      <Margin height={15} />
      <View style={styles.currentDate}>
        <ArrowIcon name="left" onPress={onPressLeftArrow} />
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{ fontSize: 20, color: "#404040" }}>
            {currentDateText}
          </Text>
        </TouchableOpacity>
        <ArrowIcon name="right" onPress={onPressRightArrow} />
      </View>
      <Margin height={15} />
      <View style={{ flexDirection: "row" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          const dayText = getDayText(day);
          let color = getDayColor(day);
          return (
            <Column
              key={day}
              disabled={true}
              text={dayText}
              color={color}
              opacity={1}
            />
          );
        })}
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => handleConfirm(date, setSelectedDate)}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  currentDate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    padding: 16,
  },
});
