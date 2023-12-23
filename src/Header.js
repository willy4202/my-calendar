import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Column from "./Column";
import { getDayColor, getDayText } from "./utils";
import dayjs from "dayjs";
import Margin from "./Margin";
import ArrowIcon from "./ArrowIcon";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ListHeader = ({ now, setSelectedDate }) => {
  const currentDateText = dayjs(now).format("YYYY.MM.DD");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const onPressLeftArrow = () => {
    const newSelectedDate = dayjs(now).subtract(1, "month");
    setSelectedDate(newSelectedDate);
  };
  const onPressRightArrow = () => {
    const newSelectedDate = dayjs(now).add(1, "month");
    setSelectedDate(newSelectedDate);
  };

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
        onConfirm={handleConfirm}
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
