import React from "react";
import { useState } from "react";
import './styles/nutritionAdvice.css'

export default function NutritionAdvice() {
    return (
        <>
            <div className="nutrition-advice-page">
                <div className="nutrition-advice-heading">
                    <h1 className="project-heading text-4xl dark:text-white m-5">Nutrition Advice.</h1>
                </div>

                <div className="nutrition-advice-title-image">
                </div>

                <div className="nutrition-advice-USPs">
                    <div className="nutrition-advice-USPs-heading">
                        <h1 className="mini-heading text-3xl dark:text-white m-5">Four Guidelines we offer.</h1>
                    </div>
                    
                    <ul className="USPs-ul">
                        <li className="USPs-li-1">
                            <div className="circle">
                                <div className="circle-text">
                                    Personalized Nutrition
                                </div>
                            </div>
                        </li>
                        <li className="USPs-li-2">
                            <div className="circle">
                                <div className="circle-text">
                                    Digestive Disorders
                                </div>
                            </div>
                        </li>
                        <li className="USPs-li-3">
                            <div className="circle">
                                <div className="circle-text">
                                    Hormone Balancing
                                </div>
                            </div>
                        </li>
                        <li className="USPs-li-4">
                            <div className="circle">
                                <div className="circle-text">
                                    Gut Health
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}