
import Question from "./Question";
const SurveyRender = () => {
    console.log(Question);
    return (
        <Survey model={Question} />
    );
}

export default SurveyRender;