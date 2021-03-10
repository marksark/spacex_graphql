import React from 'react';

const ResultCard = (props) => {
    return (
        <>
            <hr/>
            <div>
                Mission Name: {props.mission_name}
            </div>
            <div>
                Rocket Name: {props.rocket_name}
            </div>
            <div>
                Launch Date: {props.launch_date_local}
            </div>
            <div>
                {/* Not All Launches have video links */}
                {props.video ? <a href={props.video} target='_blank' rel='noreferrer'>Watch The Video Here</a> : `No Video Available!`}
            </div>
        </>
    )
}

export default ResultCard;