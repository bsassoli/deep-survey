import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ContrastDarkPanelless } from "survey-core/themes/contrast-dark-panelless";
import data from "../data"
const surveyJson = data;

const Question = () => {
    const question = new Model(surveyJson);
    question.applyTheme(ContrastDarkPanelless);
    const survey = <Survey model={question}/>;
    return <div>
        {survey}
    </div>;
}

export default Question;