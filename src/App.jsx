import "survey-core/defaultV2.min.css";
import "./App.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { ContrastDarkPanelless } from "survey-core/themes/contrast-dark-panelless";
import data from "./data";
import { useCallback } from "react";

function App() {
  const surveyJson = data;
  const survey = new Model(surveyJson);
  survey.applyTheme(ContrastDarkPanelless);

  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });


  return (
    <>
      <h1>Deepers Survey</h1>
      <Survey model={survey} />
    </>
  );
}

export default App;
