import { useState } from "react";
import '../styles/inputForm.css'

function InputForm() {
    // Use radio, not select.
    const [gender, setGender] = useState("");

    const [completedCourse, setCompletedCourse] = useState("");

    const [semester, setSemester] = useState("");

    const [teachingQuality, setTeachingQuality] = useState("");

    const [teachingMethod, setTeachingMethod] = useState("");

    const [rating, setRating] = useState("");

    const [learningExperience, setLearningExperience] = useState("");

    const [submitted, setSubmitted] = useState(false);

    // Popup message only.
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    // Popup message only.

    function formStatus(event) {
        event.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setMessage("Form has been submitted successfully.");
            setShowPopup(true);
        }, 1000);
    };

    const closePopup = () => {
        setShowPopup(false);
        setMessage(""); //Clears the message when closing.
    };

    return (
        <div className="studentFeedback-page">
            <form className="inputForm items-center" onSubmit={formStatus}>

                
                <h1 className="main-heading text-4xl dark:text-white m-5">Student Feedback form.</h1>

                    <label
                        className="gender-radio-label"
                        htmlFor="gender-radio-input"
                    >
                        What is your gender?
                    </label>

                    {/* Both radios have the same 'name'. */}
                    <div className="gender-radio-input">
                        <input
                            type="radio"
                            id="gender-radio-input-id-1"
                            className="gender-radio-input-1 border-4 border-sky-500/10 border-b-sky-500"
                            value={"female"}
                            name="gender-radio"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "female"}
                            required
                        />

                        <label htmlFor="gender-radio-input-2">
                            Female
                        </label>

                        <input
                            type="radio"
                            id="gender-radio-input-id-2"
                            className="gender-radio-input-2 border-4 border-sky-500/10 border-b-sky-500"
                            value={"male"}
                            name="gender-radio"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "male"}
                            required
                        />

                        <label htmlFor="gender-radio-input-1">
                            Male
                        </label>
                    </div>

                    <label htmlFor="completedCourse" className="completedCourse-label">
                        Which course did you complete?
                    </label>
                    <input
                        value={completedCourse}
                        onChange={(e) => setCompletedCourse(e.target.value)}
                        name="completedCourse"
                        type="text"
                        required
                        placeholder="I.e. Frontend, Backend, Graphic designing, etc."
                        className="completedCourse-input border-4 border-sky-500/10 border-b-sky-500"
                    />

                    <label htmlFor="semester" className="semester-label">
                        What is your current semester?
                    </label>
                    <input
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        name="semester"
                        type="text"
                        required
                        placeholder="8th semester"
                        className="semester-input border-4 border-sky-500/10 border-b-sky-500"
                    />

                    <label htmlFor="teachingQuality" className="teachingQuality-label">
                        What is the teaching quality of the teacher?
                    </label>
                    <input
                        value={teachingQuality}
                        onChange={(e) => setTeachingQuality(e.target.value)}
                        name="teachingQuality"
                        type="text"
                        required
                        placeholder="Fair enough."
                        className="teachingQuality-input border-4 border-sky-500/10 border-b-sky-500"
                    />

                    <label htmlFor="teachingMethod" className="teachingMethod-label">
                        How is the teaching method of the teacher?
                    </label>
                    <input
                        value={teachingMethod}
                        onChange={(e) => setTeachingMethod(e.target.value)}
                        name="teachingMethod"
                        type="text"
                        required
                        placeholder="By the book."
                        className="teachingMethod-input border-4 border-sky-500/10 border-b-sky-500"
                    />

                    <label htmlFor="learningExperience" className="learningExperience-label">
                        Share your experience or suggestions:
                    </label>

                    <textarea
                        value={learningExperience}
                        onChange={(e) => setLearningExperience(e.target.value)}
                        name="learningExperience"
                        rows={4}
                        required
                        className="learningExperience-textarea border-4 border-sky-500/10 border-b-sky-500"
                        id="learning-experience-textarea-id">

                    </textarea>

                    <label htmlFor="rating" className="rating-label">
                        Give your overall rating:
                    </label>
                    <select
                        className="rating-select border-4 border-sky-500/10 border-b-sky-500"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        name="rating"
                        type="text"
                        required
                        id="rating-select-id">
                        Choose a rating:
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <div className="submitted">
                        <button className="submitted-button" type="submit">Submit</button>
                    </div>



            </form>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>{message}</h2>
                        <button className="popup-content-close-button" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InputForm;