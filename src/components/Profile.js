const Profile = () =>{
    return(
        <>
        
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container bootstrap snippets bootdey">
<div className="row">
  <div className="profile-nav col-md-3">
      <div className="panel">
          <div className="user-heading round">
              <a href="#">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@wbs.com</p>
          </div>

          <ul className="nav nav-pills nav-stacked">
              <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
              <li><a href="#"> <i className="fa fa-calendar"></i> Recent Activity <span className="label label-warning pull-right r-activity"></span></a></li>
              <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li>
          </ul>
      </div>
  </div>
  <div className="profile-info col-md-9">
      <div className="panel">
          <form>
              <textarea placeholder="Whats in your mind today?" rows="2" className="form-control input-lg p-text-area"></textarea>
          </form>
          <footer className="panel-footer">
              <button className="btn btn-warning pull-right">Post</button>
              <ul className="nav nav-pills">
                  <li>
                      <a href="#"><i className="fa fa-map-marker"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-camera"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className=" fa fa-film"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-microphone"></i></a>
                  </li>
              </ul>
          </footer>
      </div>
      <div className="panel">
          <div className="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
          </div>
          <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                  <div className="bio-row">
                      <p><span>First Name </span>: Camila</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Last Name </span>: Smith</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Country </span>: Australia</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Birthday</span>: 13 January 1983</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Occupation </span>: UI Designer</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Email </span>: jsmith@wbs.com</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Mobile </span>: (12) 03 4567890</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Phone </span>: 88 (02) 123456</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>

        </>
    );
}

export default Profile;