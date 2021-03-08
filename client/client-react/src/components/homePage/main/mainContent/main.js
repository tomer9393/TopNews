import TodayPosts from './todayPosts/todayPosts';
import Widgets from './widgets/widgets';
import WelcomePost from './welcomePost';


function MainContent() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        {/* Gazette Welcome Post */}
                        <WelcomePost />

                        {/* Today Posts */}
                        <TodayPosts />
                    </div>
                   <Widgets />
                </div>
            </div>
        </>
    );
}

export default MainContent;