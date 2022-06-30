import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

 const loadReminders = async () => {
   const reminders = await reminderService.getReminders();
   setReminders(reminders);
 }

 const removeReminder = (id: number) => {
   setReminders(reminders.filter(reminder => reminder.id !== id));
 }

  return (
    <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
  );
}

export default App;
