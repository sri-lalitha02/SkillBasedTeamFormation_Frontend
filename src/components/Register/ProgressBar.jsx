import React from "react";

const ProgressBar = ({ step }) => {

    const steps = [
        "Basic Information",
        "Professional",
        "Profile"
    ];

    return (
        <div className="progress-container">

            {steps.map((item, index) => {

                const stepNumber = index + 1;

                return (
                    <div 
                        key={stepNumber}
                        className="progress-step"
                    >

                        <div
                            className={
                                step >= stepNumber
                                    ? "circle active"
                                    : "circle"
                            }
                        >
                            {stepNumber}
                        </div>

                        <span>
                            {item}
                        </span>

                        {stepNumber !== steps.length && (
                            <div
                                className={
                                    step > stepNumber
                                    ? "line active-line"
                                    : "line"
                                }
                            />
                        )}

                    </div>
                );

            })}

        </div>
    );
};

export default ProgressBar;