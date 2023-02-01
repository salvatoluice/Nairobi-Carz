const carData = [
  {
    id: 1,
    brand: "nissan",
    rating: 112,
    carName: "Nissan Teana",
    imgUrl: "https://images.unsplash.com/photo-1592365559101-19adfefdf294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlzc2FuJTIwdGVhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    model: "Model 3",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "American company that designs and manufactures electric vehicles, energy storage systems and solar panels.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: "https://images.unsplash.com/photo-1547245324-d777c6f05e80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG95b3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    model: "Model-2022",
    price: 3500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Japanese car manufacturer, known for producing a wide range of reliable and efficient vehicles for various segments.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    model: "Model-2022",
    price: 6500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "German luxury brand, known for producing cars and motorcycles with a focus on performance and technology",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: "https://images.unsplash.com/photo-1616512392569-fadfa4ead5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    model: "Model-2022",
    price: 7000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Japanese car manufacturer, known for producing a wide range of vehicles including sedans, SUVs, and trucks",
  },

  {
    id: 5,
    brand: "toyota",
    rating: 94,
    carName: "Toyota Axio",
    imgUrl: "https://images.unsplash.com/photo-1588440983028-d53e24fa96cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MTA0ODM4NDl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    model: "Model-2022",
    price: 3500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "German luxury brand known for producing high-end cars and SUVs",
  },

  {
    id: 7,
    brand: "Toyota",
    rating: 82,
    carName: "Toyota Premio XS",
    imgUrl: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    model: "Model 3",
    price: 3500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Mercedes",
    rating: 52,
    carName: "C200 Mercedes Benz",
    imgUrl: "https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    model: "Model 3",
    price: 4500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
