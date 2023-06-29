export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1117809170519961703/1124055117562396763/uajY0XrMkYM-removebg-preview.png",
      name: "Game house",
      description: "Discord türkiyenin en iyi oyun ortamı",
      link: "https://discord.gg/gamehouse",
    }
  ];
  res.status(200).json(data)
