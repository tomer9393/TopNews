import MainContent from './mainContent/main';
import CategoriesPosts from './categoriesPosts/categoriesPosts';


function Main() {
    return (
        <>
            <section className="main-content-wrapper section_padding_100">
                {/* Main Content Area Start */}
                <MainContent />
                {/* Main Content Area End */}

                {/* Catagory Posts Area Start */}
                <CategoriesPosts />
                {/* Catagory Posts Area End */}
            </section>
        </>
    );
}

export default Main;