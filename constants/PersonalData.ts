export type Member = {
  name: string;
  youtubeID?: string;
  niconicoID?: string;
  bilibiliID?: string;

  twitterID?: string;
  instagramID?: string;
  tiktokID?: string;

  comment?: string;
  imgLink?: string;
};

const data: { members: Member[] } = {
  members: [
    {
      name: "ななみつき",
      youtubeID: "UC7MR9RVYEZzeEohsAaoz3yA",
      niconicoID: "50002604",
      bilibiliID: "104419229",

      twitterID: "nanamitsuki_73",
      instagramID: "",
      tiktokID: "nanamitsuki_73",

      comment: "のんびり曲を作るよ。",
      imgLink:
        "https://pbs.twimg.com/profile_images/1343228076621090816/yoWO3R4l_400x400.jpg",
    },
    {
      name: "Urban",
    },
    {
      name: "光る山羊",
    },
    {
      name: "時雨リド",
      youtubeID: "",
      niconicoID: "",
      twitterID: "rid_sigure",
      comment: "趣味で作曲してます。",
      imgLink:
        "https://pbs.twimg.com/profile_images/1567080990648172544/Wxy2B8Ae_400x400.jpg",
    },
    {
      name: "Lu",
      youtubeID: "UCpjSeIwGDun_slHEB5qsWaw",
      niconicoID: "78137546",
      twitterID: "ciel_335",

      comment: "音楽を聴いたり作ったりします",
      imgLink:
        "https://pbs.twimg.com/profile_images/1431175947051429892/2piAKv0i_400x400.jpg"
    },
    {
      name: "Dance on Yakiudon",
      youtubeID: "UCzNKXL8uNeDE-qUgmXwBZ9Q",
      niconicoID: "48594863",
      twitterID: "danceonyakiudon",
      comment: "Onigiri.",

    },
  ],
};

export default data;
