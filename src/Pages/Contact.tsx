function Contact(){
    return (
        <>
        <h1 className="Contact">Contacts:</h1>
        <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Student Services Office</div>
      Phone number: 0983475930 <br/>
      Email: studentservices@university.edu <br />
      Office Hours: Monday to Friday, 8:00 AM – 5:00 PM
    </div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Student Government Office</div>
      Phone number: 0986428367 <br/>
      Email: studentbody@university.edu <br />
      Office Hours: Monday to Friday, 8:00 AM – 5:00 PM <br />
      President: Juan Dela Cruz - email: president.studentbody@university.edu
    </div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">University Counseling Office</div>
      Phone number: 0938658490 <br/>
      Email: counseling@university.edu <br />
      Office Hours: Monday to Friday, 8:00 AM – 5:00 PM <br />
    </div>
  </li>
</ol>
        </>
    )
}

export default Contact;