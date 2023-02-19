import React from 'react';

function Subject({data}) {
  return (
    <div key={`subject-${data.id}`} className='subject-wrapper'>
      {data.title}
    </div>
  );
}

export default Subject;