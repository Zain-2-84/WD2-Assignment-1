export const Options = ( { correctAnswer, incorrectAnswer, onAnswer } ) => {
    const allOptions = [...incorrectAnswer, correctAnswer];

    const handleOption = (value) => {
        onAnswer(value);
    };

    return (
        <>
           { allOptions.map( (option, index) => {
            return (
                <div key={index}>
                    <input 
                        // className="grid-cols-4"
                        className="row-span-3 row-start-2"
                        type="radio"
                        name="option"
                        value={option}
                        onClick={ () => handleOption( option ) }
                    />

                    <label>{ option }</label>
                </div>
            );
           } ) }
        </>
    );
};