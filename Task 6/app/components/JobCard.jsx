import React from 'react'

const JobCard = ({job}) => {

    return (
        <div>
      <div className='job-listing-container'>
        <div className='job-list-content'>
            <div className='avatar'>
                <p>avatar</p>
            </div>

            <div className='job-detail'>
            <div className='job-title'>
        <p>{job.title}</p>
            </div>

            <div className='job-company-detail'>
                <div className='job-company'>
                    <p>{job.company}</p>
                </div>

                <div className='job-location'>
                    <p>{job.about.location}</p>
                </div>
            </div>
            <div className='job-description'>
                <p> {job.description}</p>
            </div>

            <div className='job-tags'>
                    <button className='job-type'>in-person</button>
                    {job.about.categories.map((category, index) => (
                      <button key={index} className="job-category-button">
                        {category}
                      </button>
                    ))}

                    {job.about.requiredSkills.map((skill, index) => (
                      <button key={index}className='job-qualification' >
                        {skill}
                      </button>
                     ) )}
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default JobCard;