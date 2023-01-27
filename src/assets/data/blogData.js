// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Salvato",
    date: "25th Jan, 2023",
    time: "12 noon",
    imgUrl: img01,
    description:
      "Always follow the rules of the road, obey traffic laws, and maintain a safe following distance from other vehicles. Additionally, it is important to pay attention to the road and your surroundings at all times, anticipate the actions of other drivers, and be prepared to react quickly to potential hazards. It is also important to maintain your vehicle, keeping it in good working condition, including regular checkup and services. Additionally, it's also recommended to drive defensively, which means being aware of other drivers, pedestrians, and potential hazards, and taking actions to prevent accidents. This includes scanning the road ahead for potential dangers, avoiding distractions, and being aware of your vehicle's blind spots.",
    quote:
      "Keep in mind that driving requires your full attention and should not be done while under the influence of alcohol or drugs, or while feeling tired or drowsy",
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Salvato",
    date: "1 Jan. 2023",
    time: "6pm",
    imgUrl: img02,
    description:
      "You can use jumper cables and another working vehicle to jump-start your car. Make sure the other vehicle is running and parked close to your car, then connect the jumper cables to the appropriate terminals on both batteries. You can also use a battery charger to charge your car's battery. This can be done by connecting the charger to the appropriate terminals on the battery, and following the instructions provided by the charger's manufacturer.  If the battery is old or damaged, it may need to be replaced. You can purchase a new battery from an auto parts store and have a mechanic install it for you",
    quote:
      "If your car is manual transmission you can try to push start the car by having someone push the car while you steer it, then engage the clutch and shift to second gear",
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Salvato",
    date: "12 Jan, 2023",
    time: "12 midnight",
    imgUrl: img03,
    description:
      "Before the trip, research the destination and plan your route, including any stops or detours you may want to make. Also, make sure your vehicle is in good working condition, and check the tire pressure, oil, and other fluid levels. Pack necessary items such as a map or GPS, snacks, water, and a first aid kit. Make sure your phone is fully charged and bring a car charger. Make sure you have appropriate clothing and gear for the weather conditions and be aware of any potential hazards such as storms or flash floods. It's important to take breaks every 2 hours or so to rest and stretch your legs. This will help to prevent fatigue and increase your safety on the road",
    quote:
      "Follow the traffic laws, obey posted speed limits, and be respectful of other drivers and pedestrians. Avoid any reckless or aggressive driving",
  },
];

export default blogData;
