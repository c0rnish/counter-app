const Job = (props) => {
    return(
        <div className="job-card">
            <h1> {props.comp}</h1>
            <h1> {props.position}</h1>
            <h1> {props.company}</h1>
        </div>
    );
}

export default Job;