import React from 'react';
import Skills from './Skills';
import "./Resume.css"
import CPD from './CPD';

export default function Resume() {
  return (
    <div>
      <div>
        <Skills />
      </div>
      <div>
        <CPD />
      </div>
     <div className='resume-grid'>
     <p className='resume-title'>Domestic Assistant </p>
<small className='resume-dates'> 2019 - 2020</small>
<p className='resume-p'>Implemented company policies and regulations with precise attentiont to detail whilst also ensuring top priority was given to vulnerable patients. Efficiently multitasked as well as worked effectively within multi-disciplinary teams through strong communication. </p>
</div>

<div className='resume-grid'>
     <p className='resume-title'>Customer Service Handler</p>
<small className='resume-dates'> 2018 - 2019</small>
<p className='resume-p'>Maintained confidential case records and administrative systems. Keeping up to date with appropriate legislation and policies.
Interviewing clients and gathering facts to figure out the best possible course of action.
Carrying extensive calculations to work out entitlement and benefits. Handled complex customer queries and escalated issues to achieve a satisfactory outcome. </p>
</div>

<div className='resume-grid'>
     <p className='resume-title'>Telephone Fundraiser</p>
<small className='resume-dates'>2017 - 2018</small>
<p className='resume-p'>Providing excellent communication skills through empathy and resilience within a challenging workforce.
Build strong relationships with others within the workplace to support and exceed daily and weekly goals.
Dealing with customer queries efficiently using company policies. Assist with note taking and evidence collecting to provide feedback. Work in administration to ensure the business runs smoothly. </p>
</div>

<div className='resume-grid'>
     <p className='resume-title'>Retail Assistant </p>
<small className='resume-dates'>2015 - 2017</small>
<p className='resume-p'>Processed transactions.
Worked efficiently and maintained a positive attitude within a fast-paced environment with strict attention to detail.
Supervising a team of staff when a manager was unavailable. </p>
</div>

    </div>
  );
}
