import Reminder from "../models/reminder";

interface ReminderListProps {
    items: Reminder[]
    onRemoveReminder: (id: number) => void;
}

export default function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
    return (
        <ul>
            {items.map(item => <li key={item.id}>
                {item.title} 
                <button
                    onClick={() => onRemoveReminder(item.id)}
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Delete
                </button>
            </li>)}
        </ul>
    )
}