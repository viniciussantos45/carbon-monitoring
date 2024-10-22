import React from "react";

interface DualSidedStaffGaugeProps {
    startNumber: number;
    maxNumber: number;
    gap: number;
    gapDistance: number;
    startPX?: number;
}

const DualSidedStaffGauge: React.FC<DualSidedStaffGaugeProps> = ({
    startNumber,
    maxNumber,
    gap,
    gapDistance,
    startPX = 32,
}) => {
    const numbers = [];
    for (let i = startNumber; i <= maxNumber; i += gap) {
        numbers.push(i);
    }

    return (
        <div
            className="flex flex-col gap-1.5 items-center absolute  bg-opacity-50 backdrop-blur-[3px]"
            style={{ bottom: `${startPX}px` }}
        >
            {numbers.reverse().map((number, index) => (
                <React.Fragment key={index}>
                    <div className="flex items-center">
                        <div className="h-[2px] w-4 bg-gray-700 rounded-sm" />
                        <span className="mx-2 text-sm text-gray-700">
                            {number}
                        </span>
                        <div className="h-[2px] w-4 bg-gray-700 rounded-sm" />
                    </div>
                    {index < numbers.length - 1 && (
                        <div className="flex items-center mb-1">
                            <div className="h-[2px] w-2 bg-gray-700 rounded-sm" />
                            <div className="w-10" />
                            <div className="h-[2px] w-2 bg-gray-700 rounded-sm" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default DualSidedStaffGauge;
