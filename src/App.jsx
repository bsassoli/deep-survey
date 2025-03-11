import "survey-core/defaultV2.min.css";
import "./App.css";
import "./index.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SolidLight } from "survey-core/themes/solid-light";
import data from "./data";


function App() {
  const surveyJson = data;
  const survey = new Model(surveyJson);
  survey.applyTheme(SolidLight);

  survey.onComplete.add((sender) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });


  return (
    <>
      <Survey model={survey} />
    </>
  );
}

export default App;
