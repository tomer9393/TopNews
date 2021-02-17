import SingleTodayPosts from './singleTodayPosts';


function TodayPosts() {
    return (
        <>
            <div className="gazette-todays-post section_padding_100_50">
                <div className="gazette-heading">
                    <h4>today’s most popular</h4>
                </div>
                
                {/* Single Today Post */}
                <SingleTodayPosts/>
                {/* Single Today Post */}
                <SingleTodayPosts/>

            </div>
        </>
    );
}

export default TodayPosts;