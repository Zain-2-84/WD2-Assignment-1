import { useState } from "react";
import { beginnerExercises, experiencedExercises, advancedExercises } from "./Exercises";


function Calisthenics () {
    const [gender, setGender] = useState("");

    const [age, setAge] = useState("");
    
    const [weight, setWeight] = useState("");

    const [initialPushups, setInitialPushups] = useState("");

    const [initialSquats, setInitialSquats] = useState("");

    const [initialPullups, setInitialPullups] = useState("");

    const [initialRopeskips, setInitialRopeskips] = useState("");

    // default value is 'weightLoss'
    const [fitnessGoal, setFitnessGoal] = useState('weightLoss');

    // After user entered their values through input, then their current exercise ability is measured here.
    const [exerciseAbility, setExerciseAbility] = useState('');

    // Exercises component start
    const [exercisesToDisplay, setExercisesToDisplay] = useState([]);

    // This will help to decide which stage the user is currently on.
    //     function getAbility(value) {
    //   if (value < 0) return "wrong";
    //   if (value <= 5) return "beginner";
    //   if (value <= 15) return "medium";
    //   if (value <= 30) return "advanced";
    //   return "beyond";
    // }

    // const pushupAbility = getAbility(pushups);
    // const squatAbility = getAbility(squats);
    // const pullupAbility = getAbility(pullups);
    // const skipAbility = getAbility(Ropeskips);
    // This will help to decide which stage the user is currently on.

    function exerciseDecider (e) {
        e.preventDefault();
        // easy = 5
        // medium = 15
        // advanced = 30

        const pushups = Number(initialPushups);
        const pullups = Number(initialPullups);
        const squats = Number(initialSquats);
        const Ropeskips = Number(initialRopeskips);

        if (pushups <= -1 || pullups <= -1 || squats <= -1 || Ropeskips <= -1){
            console.log("Please don't enter negative numbers.");
            setExerciseAbility("Wrong input.");
        } 
        else if (pushups <= 5 || pullups <= 5 || squats <= 5 || Ropeskips <= 5) 
            {
            console.log("You're a beginner.");
            setExerciseAbility("You're a beginner.");
            setExercisesToDisplay(beginnerExercises);
        } 
        else if (pushups <= 15 || pullups <= 15 || squats <= 15 || Ropeskips <= 15) 
            {
            console.log("You're a Experienced.");
            setExerciseAbility("You're a Experienced.");
            setExercisesToDisplay(experiencedExercises);
        } 
        else if (pushups <= 30 || pullups <= 30 || squats <= 30 || Ropeskips <= 30) 
            {
            console.log("You're a Advanced.");
            setExerciseAbility("You're a Advanced.");
            setExercisesToDisplay(advancedExercises);
        }
        
    }

    return (
        <>
            {/* Mention which function you want to call at onSubmit = {}. */}
            <form onSubmit={exerciseDecider} className="exerciseInputForm" id="exerciseInputFormId">
                <label 
                    className="genderLabel"
                    htmlFor="gender"
                >
                    Gender:
                </label>
                <select
                    className="genderSelect"
                    value={gender}
                    onChange={ (e) => setGender(e.target.value) }
                    name="genderSelect"
                    id="genderSelectId"
                    required
                >
                    Select gender:
                    <option disabled value="Choose one">Choose one</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                {/* <label className="genderLabel" htmlFor="gender">Gender: </label>
                <input 
                    value={gender}
                    onChange={ (e) => setGender(e.target.value) }
                    //name="gender"
                    type="text"
                    required
                    placeholder="Female or Male."
                    className="genderInput"
                    id="genderInputId"
                /> */}
                <br /><br />

                <label className="ageLabel" htmlFor="age">Age: </label>
                <input 
                    value={age}
                    onChange={ (e) => setAge(e.target.value) }
                    //name="age"
                    type="number"
                    required
                    className="ageInput"
                    id="ageInputId"
                />
                <br /><br />

                <label className="weightLabel" htmlFor="weight">Weight: </label>
                <input 
                    value={weight}
                    onChange={ (e) => setWeight(e.target.value) }
                    //name="weight"
                    type="number"
                    required
                    placeholder="Write in Kgs."
                    className="weightInput"
                    id="weightInputId"
                />
                <br /><br />

                <label className="initialPushupsLabel" htmlFor="initialPushups">Initial pushups: </label>
                <input 
                    value={initialPushups}
                    onChange={ (e) => setInitialPushups(e.target.value) }
                    //name="initialPushups"
                    type="number"
                    required
                    placeholder="Focus on quality, not quantity."
                    className="initialPushupsInput"
                    id="initialPushupsInputId"
                />
                <br /><br />

                <label className="initialSquatsLabel" htmlFor="initialSquats">Initial squats: </label>
                <input 
                    value={initialSquats}
                    onChange={ (e) => setInitialSquats(e.target.value) }
                    //name="initialSquats"
                    type="number"
                    required
                    placeholder="Focus on quality, not quantity."
                    className="initialSquatsInput"
                    id="initialSquatsInputId"
                />
                <br /><br />

                <label className="initialPullupsLabel" htmlFor="initialPullups">Initial pullups: </label>
                <input 
                    value={initialPullups}
                    onChange={ (e) => setInitialPullups(e.target.value) }
                    //name="initialPullups"
                    type="number"
                    required
                    placeholder="Focus on quality, not quantity."
                    className="initialPullupsInput"
                    id="initialPullupsInputId"
                />
                <br /><br />

                <label className="initialRopeskipsLabel" htmlFor="initialRopeskips">Initial Rope skips: </label>
                <input 
                    value={initialRopeskips}
                    onChange={ (e) => setInitialRopeskips(e.target.value) }
                    //name="initialRopeskips"
                    type="number"
                    required
                    placeholder="Focus on quality, not quantity."
                    className="initialRopeskipsInput"
                    id="initialRopeskipsInputId"
                />
                <br /><br />

                <label className="fitnessGoalLabel" htmlFor="fitnessGoal">Choose Fitness goal: </label>
                <select className="fitnessGoalSelect" name="fitnessGoal" id="fitnessGoalId"
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
                required
                >
                    <option value="weightLoss">Weight loss</option>
                    <option value="strengthGain">Strength gain</option>
                    <option value="both">Both</option>
                </select>
                <br /><br />

                <button type="submit" className="submitButton">Submit</button>
            </form>

            {exerciseAbility && <p className="showExerciseAbilityToUser">{ exerciseAbility }</p>}

            <div className="showExercisesToDisplay">
                {exercisesToDisplay.map(item => (
                    <div key={item.id} id={item.id}>{item.name} - {item.reps}</div>
                ))}
            </div>
        </>
    )
}

export default Calisthenics;