export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124309972172406804/irian_3.jpg",
      name: "Game House",
      description: "Discord türkiyenin en iyi oyun ortamı",
      link: "https://discord.gg/Game House",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/1117809170519961703/1124306831418871838/irian_2.jpg?width=473&height=473",
      name: "Youtube Channel",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://www.youtube.com/@irian35",
    }
  ];
  res.status(200).json(data);
};
