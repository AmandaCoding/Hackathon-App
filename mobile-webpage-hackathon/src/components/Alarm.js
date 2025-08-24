class Alarm {
    constructor() {
        this.alarms = [];
    }

    setAlarm(time, name, sound) {
        const alarm = {
            time: time,
            name: name,
            sound: sound,
            active: true
        };
        this.alarms.push(alarm);
        this.displayAlarms();
    }

    displayAlarms() {
        const alarmList = document.getElementById('alarm-list');
        alarmList.innerHTML = '';
        this.alarms.forEach((alarm, index) => {
            const alarmItem = document.createElement('div');
            alarmItem.className = 'alarm-item';
            alarmItem.innerHTML = `
                <span>${alarm.name} - ${alarm.time}</span>
                <button onclick="alarm.deleteAlarm(${index})">Delete</button>
            `;
            alarmList.appendChild(alarmItem);
        });
    }

    deleteAlarm(index) {
        this.alarms.splice(index, 1);
        this.displayAlarms();
    }

    chooseSound() {
        // Logic to choose sound for the alarm
    }
}

export default Alarm;