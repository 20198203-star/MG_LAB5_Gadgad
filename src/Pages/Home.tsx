function Home(){
    return (
        <>
        <h1 className="Header">Welcome to PineCrest University!</h1>
        <h3 className="Announcement">Announcements <span className="badge text-bg-secondary">Latest Updates</span></h3>

<div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
                <img src="./Photos/Uniform.jpg" className="d-block w-100" alt="New Uniform" />
            <div className="carousel-caption d-none d-md-block">
                <h5>New Uniform!</h5>
                <p>A new look of the University's IT department uniform</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="./Photos/CampusMap.jpg" className="d-block w-100" alt="Campus Map" />
            <div className="carousel-caption d-none d-md-block">
                <h5>SIT Department Area</h5>
                <p>The campus map that contains the dedicated area of the SIT departments</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>

<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">FUN RUN</h5>
        <p className="card-text">Enhance skills not only in Academics, but physical skills</p>
        <button type="button" className="btn btn-outline-primary" id="button">More</button>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">UNIVERSITY IT WORKSHOP</h5>
        <p className="card-text">Join workshops to enhance your level of knowledge and to further deepen your understanding of the program</p>
        <button type="button" className="btn btn-outline-primary">More</button>
      </div>
    </div>
  </div>
</div>


</>

    );
}

export default Home;