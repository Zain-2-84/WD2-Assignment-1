import { useState } from "react";
import { beginnerExercises, experiencedExercises, advancedExercises } from "./Exercises";
import './styles/calisthenicsPlanner.css'

function CalisthenicsPlanner () {
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

    const [submitted, setSubmitted] = useState(false);

    function exerciseDecider (e) {
        e.preventDefault();
        setSubmitted(true);

        const easy = 5
        const medium = 15
        const advanced = 30

        const pushups = Number(initialPushups);
        const pullups = Number(initialPullups);
        const squats = Number(initialSquats);
        const Ropeskips = Number(initialRopeskips);

        if (pushups <= -1 || pullups <= -1 || squats <= -1 || Ropeskips <= -1){
            console.log("Please don't enter negative numbers.");
            setExerciseAbility("Wrong input.");
        } 
        else if (pushups <= easy || pullups <= easy || squats <= easy || Ropeskips <= easy) 
            {
            console.log("You're a beginner.");
            setExerciseAbility("You're a beginner.");
            setExercisesToDisplay(beginnerExercises);
        } 
        else if (pushups <= medium || pullups <= medium || squats <= medium || Ropeskips <= medium) 
            {
            console.log("You're a Experienced.");
            setExerciseAbility("You're a Experienced.");
            setExercisesToDisplay(experiencedExercises);
        } 
        else if (pushups <= advanced || pullups <= advanced || squats <= advanced || Ropeskips <= advanced) 
            {
            console.log("You're a Advanced.");
            setExerciseAbility("You're a Advanced.");
            setExercisesToDisplay(advancedExercises);
        }
        
    }

    return (
        <div className="planner-page">
            {/* Mention which function you want to call at onSubmit = {}. */}

                <h1 className="project-heading text-4xl dark:text-white m-5">Calisthenics Planner.</h1>
                <form onSubmit={exerciseDecider} className="exerciseInputForm" id="exerciseInputFormId">
                    <fieldset className="personal-info-fieldset  bg-sky-100/50">
                        <legend htmlFor="personal-info-fieldset">
                        <div class="inline-flex items-center">
                            <span class="size-2 inline-block bg-gray-500 rounded-full m-2"></span>
                            <span class="text-gray-600 bg-white">Personal Information:</span>
                            <span class="size-2 inline-block bg-gray-500 rounded-full m-2"></span>
                        </div>
                        </legend>
                        {/*  */}

                        <label 
                        className="genderLabel"
                        htmlFor="genderSelectId"
                        >
                            Gender:
                        </label>
                        <select
                            className="genderSelect border-4 border-sky-500/10 border-b-sky-500"
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
                        {/* <br /><br /> */}

                        <label className="ageLabel" htmlFor="ageInputId">Age: </label>
                        <input 
                            value={age}
                            onChange={ (e) => setAge(e.target.value) }
                            //name="age"
                            type="number"
                            required
                            className="ageInput border-4 border-sky-500/10 border-b-sky-500"
                            id="ageInputId"
                        />
                        {/* <br /><br /> */}

                        <label className="weightLabel" htmlFor="weightInputId">Weight: </label>
                        <input 
                            value={weight}
                            onChange={ (e) => setWeight(e.target.value) }
                            //name="weight"
                            type="number"
                            required
                            placeholder="Write in Kgs."
                            className="weightInput border-4 border-sky-500/10 border-b-sky-500"
                            id="weightInputId"
                        />
                    </fieldset>
                    
                    {/* <br /><br /> */}
                    <fieldset className="calisthenics-input-fieldset  bg-sky-100/50">
                        <legend htmlFor="personal-info-fieldset">
                            <div class="inline-flex items-center">
                            <span class="size-2 inline-block bg-gray-500 rounded-full m-2"></span>
                            <span class="text-gray-600 bg-white">Your current exercise ability:</span>
                            <span class="size-2 inline-block bg-gray-500 rounded-full m-2"></span>
                            </div>
                        </legend>

                            <label className="initialPushupsLabel" htmlFor="initialPushupsInputId">Initial pushups: </label>
                        <input 
                            value={initialPushups}
                            onChange={ (e) => setInitialPushups(e.target.value) }
                            //name="initialPushups"
                            type="number"
                            required
                            placeholder="Focus on quality, not quantity."
                            className="initialPushupsInput border-4 border-sky-500/10 border-b-sky-500"
                            id="initialPushupsInputId"
                        />
                        {/* <br /><br /> */}

                        <label className="initialSquatsLabel" htmlFor="initialSquatsInputId">Initial squats: </label>
                        <input 
                            value={initialSquats}
                            onChange={ (e) => setInitialSquats(e.target.value) }
                            //name="initialSquats"
                            type="number"
                            required
                            placeholder="Focus on quality, not quantity."
                            className="initialSquatsInput border-4 border-sky-500/10 border-b-sky-500"
                            id="initialSquatsInputId"
                        />
                        {/* <br /><br /> */}

                        <label className="initialPullupsLabel" htmlFor="initialPullupsInputId">Initial pullups: </label>
                        <input 
                            value={initialPullups}
                            onChange={ (e) => setInitialPullups(e.target.value) }
                            //name="initialPullups"
                            type="number"
                            required
                            placeholder="Focus on quality, not quantity."
                            className="initialPullupsInput border-4 border-sky-500/10 border-b-sky-500"
                            id="initialPullupsInputId"
                        />
                        {/* <br /><br /> */}

                        <label className="initialRopeskipsLabel" htmlFor="initialRopeskipsInputId">Initial Rope skips: </label>
                        <input 
                            value={initialRopeskips}
                            onChange={ (e) => setInitialRopeskips(e.target.value) }
                            //name="initialRopeskips"
                            type="number"
                            required
                            placeholder="Focus on quality, not quantity."
                            className="initialRopeskipsInput border-4 border-sky-500/10 border-b-sky-500"
                            id="initialRopeskipsInputId"
                        />
                        {/* <br /><br /> */}

                        <label className="fitnessGoalLabel" htmlFor="fitnessGoalId">Choose Fitness goal: </label>
                        <select className="fitnessGoalSelect border-4 border-sky-500/10 border-b-sky-500" name="fitnessGoal" id="fitnessGoalId"
                        value={fitnessGoal}
                        onChange={(e) => setFitnessGoal(e.target.value)}
                        required
                        >
                            <option value="weightLoss">Weight loss</option>
                            <option value="strengthGain">Strength gain</option>
                            <option value="both">Both</option>
                        </select>
                    </fieldset>
                    
                    {/* <br /><br /> */}

                    <button type="submit" className="submitButton">Submit</button>
                </form>
    
                <h3 className="showExerciseAbilityToUser text-2xl dark:text-white  bg-sky-100/50">
                    { submitted ? exerciseAbility : "Fill the form above to see the results here." }
                </h3>

                <div className="showExercisesToDisplay bg-sky-100/80">
                    {exercisesToDisplay.map(item => (
                        <div className="showExercisesToDisplay-text" key={item.id} id={item.id}>
                            <img
                                src={item.image}
                                alt={item.image}
                                className="exercise-img"
                                onError={(e) => e.currentTarget.src = item.backup}
                            /> 
                            {item.name} - {item.reps}
                            </div>
                    ))}
                </div>
                
        </div>
    )
}

export default CalisthenicsPlanner;