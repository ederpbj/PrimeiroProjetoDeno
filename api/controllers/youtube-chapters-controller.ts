import { IChapter, getChaptersData } from "../models/youtube-chapters-model.ts";

const getChapters = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  let chapters = await getChaptersData(params.id);

  response.status = 200;
  response.body = chapters;
};

const searchChapter = (id: string, seconds: string): (IChapter | undefined) =>
  chapters.filter((item) => item.timeInSeconds === parseInt(seconds))[0]

const getChapter = ({ params, response }: { params: { id: string; seconds: string}; response: any}) = {
  const chaper: IChapter | undefined = searchChapter(params.id, params.seconds);
  if (chaper) {
    response.status = 200;
    reponse.body = chaper;
  } else {
    response.status = 404;
    response.body = {message: 'Chaper not found'}
  }
}

export { getChapters, searchChapter };