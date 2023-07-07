import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const RoutineGenerator = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [chosenTime, setChosenTime] = useState('');

    const handleDayToggle = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleTimeConfirm = (time) => {
        const isoTime = time.toISOString();
        const formattedTime = isoTime.substring(11, 19);
        setChosenTime(formattedTime);
        setTimePickerVisible(false);
    };

    const generateRoutines = () => {
        const routines = [];
        selectedDays.forEach((day) => {
            // Logic to generate routines for each selected day
            routines.push({
                routineDate: getRoutineDate(day),
                pickupTime: chosenTime,
                status: 'ACTIVE',
            });
        });
        console.log(routines);
    };

    const getRoutineDate = (day) => {
        const currentDate = new Date(); // Get the current date
        const currentDay = currentDate.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ...)
        const targetDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day); // Get the target day of the week

        const daysToAdd = (targetDay - currentDay + 7) % 7; // Calculate the number of days to add to reach the target day
        currentDate.setDate(currentDate.getDate() + daysToAdd); // Add the calculated number of days to the current date

        // Format the routine date as "YYYY-MM-DD" (e.g., "2023-07-07")
        const formattedDate = currentDate.toISOString().split('T')[0];

        return formattedDate;
    };

    return (
        <View>
            <Text>Select days:</Text>
            <TouchableOpacity onPress={() => handleDayToggle('Sunday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Sunday') ? 'green' : 'white' }}>Sunday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Monday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Monday') ? 'green' : 'white' }}>Monday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Tuesday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Tuesday') ? 'green' : 'white' }}>Tuesday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Wednesday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Wednesday') ? 'green' : 'white' }}>Wednesday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Thursday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Thursday') ? 'green' : 'white' }}>Thursday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Friday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Friday') ? 'green' : 'white' }}>Friday</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDayToggle('Saturday')}>
                <Text style={{ backgroundColor: selectedDays.includes('Saturday') ? 'green' : 'white' }}>Saturday</Text>
            </TouchableOpacity>
            <Text onPress={() => setTimePickerVisible(true)}>Pick a time</Text>
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"

                onConfirm={handleTimeConfirm}
                onCancel={() => setTimePickerVisible(false)}
            />
            <Text onPress={generateRoutines}>Generate Routines</Text>
        </View>
    );
};

export default RoutineGenerator;