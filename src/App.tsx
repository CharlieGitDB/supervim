import { FC } from "react";
import MiddleOfContent from "./components/MiddleOfContent/MiddleOfContent";
import LinkButton from "./components/LinkButton/LinkButton";
const App: FC = () => (
  <MiddleOfContent>
    <div className="prose prose-xl">Welcome to Super Vim!</div>
    <div className="prose prose-lg">This is a game that is a (hopefully) somewhat fun way to learn VIM</div>
    <LinkButton url={'1'}>Start</LinkButton>
  </MiddleOfContent>
);

export default App;
