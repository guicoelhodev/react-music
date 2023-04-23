import { useInfiniteQuery } from "react-query";
import api from "services/api";
import { IRequiredParams, IResponse } from "./types";

const getTopWorldWide = async ({ offSet, limit = 20 }: IRequiredParams) => {
  console.log("thats the offSet", offSet);
  const playlistId = 3155776842;

  try {
    const response = await api.get(
      `/playlist/${playlistId}?index=${offSet}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Http request error");
  }
};
export const useTopWorldMusic = (limit: number) => {
  return useInfiniteQuery<IResponse>(
    ["GET_topWorldMusic"],
    async ({ pageParam = 0 }) =>
      await getTopWorldWide({ offSet: pageParam * limit, limit }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.tracks.data.length < limit) return undefined;
        return pages.length;
      },
    }
  );
};
