function SingleTeamMember() {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="single-team-area">
                    <img src="img/bg-img/t1.jpg" alt />
                    <div className="team-member-data">
                        <h4 className="font-pt">Jane Doe</h4>
                        <div className="team-member-designation-social-info d-flex align-items-cente justify-content-between">
                            <h5 className="font-pt mb-0">Editor</h5>
                            <div className="social-info">
                                <a href="#"><i className="fa fa-pinterest" /></a>
                                <a href="#"><i className="fa fa-linkedin" /></a>
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTeamMember;