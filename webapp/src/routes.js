import WebViewContent from "./components/WebViewContent";
import ExerciseTwo from "./components/ExerciseTwo";
import BonusContent from "./components/BonusContent";

const routes = [
  { path: "/", component: WebViewContent },
  { path: "/exercise-2", component: ExerciseTwo },
  { path: "/Bonus", component: BonusContent },
];

export default routes;
