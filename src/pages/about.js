import TimeLine from '../modules/timeline';

const About = () => {
  var json = require('../json/timeline.json');
  var timeline = new TimeLine(json);
  return (
    <div>
      {timeline.get()}
    </div>

  );
};
  
export default About;