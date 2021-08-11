import { intialNews } from "./news";

export const initialLocalData = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log("intial local database");
    try {
      const news = data.newsList;
      const result = await Promise.all([intialNews(news)]);
      resolve({ data: result });
    } catch (error) {
      reject(`error ${error}`);
    }
  });
};
