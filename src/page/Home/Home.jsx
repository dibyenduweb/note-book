import Navbar from "../../components/Navbar/Navbar";
import TextArea from "../../components/TaxtArea/TextArea";


const Home = () => {
    return (
        <div>
          <h1 className="text-4xl text-center text-red-600 text-bold">Notebook</h1>
          <Navbar/>
        
          <TextArea/>
        </div>
    );
};
export default Home;