import { useQuery } from "react-query";
import { IResponse } from "./types";
import api from "services/api";

interface IRequiredParams {
  inputValue: string;
}

const searchMusic = async ({ inputValue }: IRequiredParams) => {
  try {
    const response = await api.get(`/search/?q=${inputValue}`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const useSearchMusic = (params: IRequiredParams) => {
  return useQuery<IResponse>(
    ["GET_searchMusic", params],
    async () => await searchMusic(params),
    {
      enabled: !!params.inputValue,
    }
  );
};
