const getData = async () =>{
    const jobs = await fetch('jobData.json');
    const jobData = await jobs.json();
    return jobData;
}

export default getData;