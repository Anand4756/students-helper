import PdfViewer from "../PdfViewer/PdfViewer";
import PostCard from "./PostCard";
import {useState,useEffect} from 'react';
import axios from 'axios'

export default function CenterMenu() {
    const pdfUrls = [
        "/api/hello",

      ];
      const [cards, setCards] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/all-posts');
            setCards(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
      }, []);
    return (
      <div className="w-screen h-auto">
        
      {cards.length>0?cards.map((card) => (
    <PostCard
      key={card._id}
      imageSrc={card.cloudinaryUrl}
      title={card.title}
      description={card.description}
      postowner={card.user}
    />
  )):"No new post"}

      {/*<PdfViewer pdfUrls={pdfUrls}/>*/}
      </div>
      );
}
