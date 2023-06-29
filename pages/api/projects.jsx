export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124055117562396763/uajY0XrMkYM-removebg-preview.png",
      name: "Game House",
      description: "Discord türkiyenin en iyi oyun ortamı",
      link: "https://discord.gg/Game House",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124065680627613796/JPEG_20180902_205240.jpg",
      name: "Youtube Channel",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://www.youtube.com/@irian35",
    }
  ];
  res.status(200).json(data);
};
