import "survey-core/defaultV2.min.css";
import "./App.css";
import "./index.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { ContrastDarkPanelless } from "survey-core/themes/contrast-dark-panelless";
import data from "./data";


function App() {
  const surveyJson = data;
  const survey = new Model(surveyJson);
  survey.applyTheme(ContrastDarkPanelless);

  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });


  return (
    <>
      <p className="title fira-code-deepers">
        <span className="green-deepers">&#123;</span>
        deepers
        <span className="green-deepers">_</span>
        </p>
      <h1 className="title">AI readiness assessment</h1>


      <Survey model={survey} />
    </>
  );
}

export default App;
