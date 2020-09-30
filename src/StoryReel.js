import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=6&m=636379014&s=612x612&w=0&h=tnYrf_O_nvT15N4mmjorIRvZ7lK4w1q1c7RSfrVmqKA='
        profileSrc='https://www.ezanime.net/wp-content/uploads/2020/05/ijsi5fzb1nbkbhxa2gc1.png'
        title='Xavi'
      />
      <Story
        image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        profileSrc='https://almomento.mx/wp-content/uploads/2020/05/aceboook-jpg.jpg'
        title='Laia'
      />
      <Story
        image='https://www.thebhojpuri.in/wp-content/uploads/2019/04/Ritu-Singh-HD-Wallpaper-Latest-Picture-and-Photos-1.jpg'
        profileSrc='https://lh3.googleusercontent.com/proxy/NnPO8j3QRzlXr7fftaa1L8F0k73E1TmldtKvnUcF03XihLNANd9OrmdCh1djzj4liAppMYCLazTshG5HK6oVWcdYjL82ypZPo0BOig7RPFYakhRGwG_GoQ'
        title='Vaquerizo'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsQFRBUg_SUmPn6zV0KS074QBlk-t-YbrSNw&usqp=CAU'
        profileSrc='https://imagenes.milenio.com/BPrnkx4DHxRgmSQLvh2z8I6EW9Q=/958x596/https://www.milenio.com/uploads/media/2020/06/03/asi-puedes-crear-tu-avatar_0_58_581_362.png'
        title='Superman'
      />
      <Story
        image='https://miro.medium.com/max/2000/1*q407wLWlN9-EyRej2G2GCA.jpeg'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPmaCNYvlRxOqBXePNSY5U2LKFr9IbNGd_tQ&usqp=CAU'
        title='Batman'
      />
    </div>
  );
};

export default StoryReel;
