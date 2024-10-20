import { useState } from "react";

const AddNewObjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sensorName, setSensorName] = useState("");

    const handleAdd = () => {
        // Simulate adding a new sensor
        alert(`Added new sensor: ${sensorName}`);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
                Add New Object
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <h2 className="text-xl mb-4">Add New Sensor</h2>
                        <input
                            type="text"
                            placeholder="Sensor Name"
                            value={sensorName}
                            onChange={(e) => setSensorName(e.target.value)}
                            className="border p-2 mb-4 w-full"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={handleAdd}
                                className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                            >
                                Add
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddNewObjectModal;
