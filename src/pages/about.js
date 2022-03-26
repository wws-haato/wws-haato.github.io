import TimeLine from '../modules/timeline';

const About = () => {
  var json = require('../json/timeline.json');
  var timeline = new TimeLine(json);
  return (
    <div>
      <h1>Welcome to About</h1>
    </div>
  );
};
  
export default About;