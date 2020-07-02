import {v4 as uuidv4} from 'uuid'

// Comment content
let commentArray = [
    {
        name: "Micheal Lyons",
        date: "12/18/2018",
        text:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
      },
      {
      name: "Gary Wong",
      date: "12/12/2018",
      text:
        "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },
    {
      name: "Theodore Duncan",
      date: "11/15/2018",
      text:
        "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },
    
   
  ];
// Side Video Object
const sideVideos = [
  {
    id: uuidv4(),
    title: "Become A Travel Pro In One Easy Lesson",
    channel: "Todd Welch",
    image: "./assets/Images/video-list-1.jpg",
  },
  {
    id: uuidv4(),
    title: "Les Houches The Hidden Gem Of The Chamonix",
    channel: "Bernard Patrick",
    image: "./assets/Images/video-list-2.jpg",
  },
  {
    id: uuidv4(),
    title: "Travel Health Useful Medical Information For",
    channel: "Lizzie Burton",
    image: "./assets/Images/video-list-3.jpg",
  },
  {
    id: uuidv4(),
    title: "Cheap Airline Tickets Great Ways to Save",
    channel: "Emily Harper",
    image: "./assets/Images/video-list-4.jpg",
  },
  {
    id: uuidv4(),
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Ethan Owen",
    image: "./assets/Images/video-list-5.jpg",
  },
  {
    id: uuidv4(),
    title: "Choose The Perfect Accommodations",
    channel: "Lydia Perez",
    image: "./assets/Images/video-list-5.jpg",
  },
  {
    id: uuidv4(),
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
    image: "./assets/Images/video-list-6.jpg",
  },
  {
    id: uuidv4(),
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
    image: "./assets/Images/video-list-7.jpg",
  },
  {
    id: uuidv4(),
    title: "BMX Rampage: 2018 Highlights",
    channel: "Red Cow",
    image: "./assets/Images/video-list-0.jpg",
  },
];


//Main Video Object
const mainVideo = {
  id: uuidv4(),
  title: "BMX Rampage: 2018 Highlights",
  description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  channel: "Red Cow",
  image: "./assets/Images/video-list-0.jpg",
  views: "1,001,023",
  likes: "110,985",
  duration: "0:42",
  video: "./assets/Video/BrainStation Sample Video.mp4",
  timestamp: 1560312000,
  comments: commentArray,
};
