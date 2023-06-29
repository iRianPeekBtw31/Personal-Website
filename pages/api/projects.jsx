@@ -1,18 +1,10 @@
export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/954502826791428136/codeshare_logo.png",
      name: "Code Share",
      description: "Discord Türkiyenin En iyi oyun sunucularından CSGO MİNECRAFT LOL VALORANT oyunlarının olduğu bir sunucudur",
      link: "https://discord.gg/gamehouse",
    },

    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124055117562396763/uajY0XrMkYM-removebg-preview.png",
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124055117562396763/uajY0XrMkYM-removebg-preview.png",
      name: "Youtube Channel",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://github.com/iRianPeekBtw31/",
      link: "https://discord.com/users/1016843895713308693",
    }
  ];
  res.status(200).json(data);
