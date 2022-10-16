import { getExceptionPayload, publicRequest } from "./services";

export async function getMovieDetails(i: any, { rejectWithValue }: any) {
  try {
    const response = await publicRequest.get<Response>("", {
      params: {
        apikey: "8018e9cd",
        i,
      },
    });
    return response.data;
  } catch (ex) {
    return rejectWithValue(getExceptionPayload(ex));
  }
}
