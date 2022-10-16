import { getExceptionPayload, publicRequest } from "./services";

const DEFAULT_SEARCH_QUERY = "fantasy";

export async function getMoviePosts(
  searchQuery: string,
  { rejectWithValue }: any
) {
  try {
    const response = await publicRequest.get<Response>("", {
      params: {
        apikey: "8018e9cd",
        s: searchQuery || DEFAULT_SEARCH_QUERY,
        limit: 250,
      },
    });

    return response.data;
  } catch (ex) {
    return rejectWithValue(getExceptionPayload(ex));
  }
}
