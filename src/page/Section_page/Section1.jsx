import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <div>
     <form>
        <div className='topic_section'>
            You want name section
        </div>

          <div className='section_p'>
              <p>The main objective of this project is to create a web application that assists users in identifying plant diseases through 
                  image recognition and recommends suitable crops to cultivate based on their location. This will empower farmers, 
                  agriculturalists, and plant enthusiasts to make informed decisions for healthier crop growth and optimized agricultural 
                  planning.   
                    </p>
          </div>

          <div className='location'>
              location <input type='text' name='section'></input>
              <button type='sectiun'>section to location</button>
          </div>
     </form>
    </div>
  );
}

export default Section1;
