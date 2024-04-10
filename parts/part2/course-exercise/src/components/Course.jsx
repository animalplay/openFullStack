import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({ course }) => {

  const {name, parts} = course

  return (
    <section>
      
      <Header name={name} />
      <Content parts={parts}/>
      
    </section>
  )
};
