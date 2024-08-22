import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import "./App.css"

export const Experience = () => {
  return (
    <div className='experience'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />

      <VerticalTimeline lineColor="orange">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='2020-2022'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>Rajavignesh higher secondary school</h1>
          <h4> Melamathur</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='2022-2026'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>Bannari Amman Institute of technology</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='4-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>Front-end learning </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='two-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<WorkIcon/>}
        >
          <div className='vertical-timeline-element-title'><div><i class="fa-brands fa-react react" style={{color:"blue" , transform:' rotate(360)' }}></i></div>React</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='one-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<WorkIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>Tailwind</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='3-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<WorkIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>Back-end learning</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='3-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<WorkIcon/>}
        >
          <div className='vertical-timeline-element-title'><i class="fa-brands fa-node-js" style={{color:"green"  }}></i>
          <div>Node.js</div></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='one-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<StarIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>C</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='one-months'
          dateClassName='date'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<StarIcon/>}
        >
          <h1 className='vertical-timeline-element-title'>C++</h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
   
  );
}

export default Experience;
