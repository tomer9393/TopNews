import WorldNews from './worldNews/worldNews';

function MainContent() {
    return (
        <>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="sidebar-area">
                    {/* Don't Miss Widget */}
                    <WorldNews/>
                </div>
            </div>

        </>
    );
}

export default MainContent;