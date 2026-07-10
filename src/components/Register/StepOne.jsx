import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


const StepOne = ({
    form,
    handleChange,
    errors,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword
}) => {

    return (
        <div className="step-container">

            <h2 className="step-title">
                Basic Information
            </h2>

            {/* First Name + Last Name */}

            <div className="row">

                <div className="field">

                    <label>First Name *</label>

                    <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />

                    {errors.firstName && (
                        <span className="error">
                            {errors.firstName}
                        </span>
                    )}

                </div>


                <div className="field">

                    <label>Last Name *</label>

                    <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />

                    {errors.lastName && (
                        <span className="error">
                            {errors.lastName}
                        </span>
                    )}

                </div>

            </div>


            {/* Email + Mobile */}

            <div className="row">

                <div className="field">

                    <label>Email *</label>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <span className="error">
                            {errors.email}
                        </span>
                    )}

                </div>


                <div className="field">

                    <label>Mobile *</label>

                    <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        maxLength={10}
                        onChange={handleChange}
                    />

                    {errors.mobile && (
                        <span className="error">
                            {errors.mobile}
                        </span>
                    )}

                </div>

            </div>


            {/* Password + Confirm Password */}

            <div className="row">

                <div className="field">

                    <label>Password *</label>

                    <div className="password-field">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />


                        <button
                            type="button"
                            className="eye-btn"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {
                                showPassword
                                    ? <FiEyeOff />
                                    : <FiEye />
                            }
                        </button>

                    </div>


                    {errors.password && (
                        <span className="error">
                            {errors.password}
                        </span>
                    )}

                </div>



                <div className="field">

                    <label>Confirm Password *</label>

                    <div className="password-field">

                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />


                        <button
                            type="button"
                            className="eye-btn"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                        >
                            {
                                showConfirmPassword
                                    ? <FiEyeOff />
                                    : <FiEye />
                            }
                        </button>

                    </div>


                    {errors.confirmPassword && (
                        <span className="error">
                            {errors.confirmPassword}
                        </span>
                    )}

                </div>

            </div>


        </div>
    );
};


export default StepOne;