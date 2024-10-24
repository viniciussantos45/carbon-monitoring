import React from "react";

interface DualSidedStaffGaugeProps {
    startNumber: number;
    maxNumber: number;
    gap: number;
    startPX?: number;
    height?: number;
}

const DualSidedStaffGauge: React.FC<DualSidedStaffGaugeProps> = ({
    startNumber,
    maxNumber,
    gap,
    startPX = 32,
    height = 200,
}) => {
    const numbers = [];
    for (let i = startNumber; i <= maxNumber; i += gap) {
        numbers.push(i);
    }

    const maxHeight = 300;
    const adjustedHeight = height > maxHeight ? maxHeight : height;
    const itemHeight = adjustedHeight / numbers.length;
    const tickCount = 3;

    return (
        <div
            className="flex flex-col gap-0 items-center absolute bg-opacity-50 backdrop-blur-[3px]"
            style={{
                bottom: `${startPX + 10}px`,
                height: `${adjustedHeight}px`,
            }}
        >
            {numbers.reverse().map((number, index) => (
                <React.Fragment key={index}>
                    <div
                        className="flex items-center justify-between"
                        style={{ height: `${itemHeight}px` }}
                    >
                        <div className="h-[2px] w-4 bg-gray-700 rounded-sm" />
                        <span className="mx-2 text-sm text-gray-700">
                            {number}
                        </span>
                        <div className="h-[2px] w-4 bg-gray-700 rounded-sm" />
                    </div>
                    {index < numbers.length - 1 && (
                        <div
                            className="flex flex-col items-center"
                            style={{ height: `${itemHeight}px` }}
                        >
                            {[...Array(tickCount)].map((_, tickIndex) => (
                                <div
                                    key={tickIndex}
                                    className="flex items-center justify-between w-full"
                                    style={{
                                        height: `${
                                            itemHeight / (tickCount + 1)
                                        }px`,
                                    }}
                                >
                                    <div className="h-[1px] w-2 bg-gray-500 rounded-sm" />
                                    <div className="w-10" />
                                    <div className="h-[1px] w-2 bg-gray-500 rounded-sm" />
                                </div>
                            ))}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default DualSidedStaffGauge;
