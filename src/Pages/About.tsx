function About(){
    return(
    <>
    <h1>ABOUT</h1>
    <div className="row">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Mission</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">University Services</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Q&A</a>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example">
      <h4 id="list-item-1">What is the University's Mission?</h4>
      <p>“To provide a quality, accessible and non-discriminatory education environment that empowers students to become competent, 
        ethical, knowledgeable, skillfull and socially responsible individuals. The University is committed to fostering academic excellence, 
        innovation, and lifelong learning while promoting community engagement and sustainable development.”</p>
        <br />
      <h4 id="list-item-2">Who are the University's services for?</h4>
      <p>The University's services are for the STUDENTS.</p>
      <br />
      <h4 id="list-item-3">Frequently Asked Questions</h4>
      <p>Q: How do I enroll in classes for the new semester?
        A: Log in to the portal, go to Enrollment Services, select your subjects, and submit your enrollment. 
        Make sure you have no outstanding balances. <br /> <br />
        Q: How can I view my grades? A: Navigate and click on the Services section. You can view grades for the current and previous semesters.</p>
    </div>
  </div>
</div>
    </>
    );
}

export default About;