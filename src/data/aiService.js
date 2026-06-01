export async function getAIResponse(prompt) {
  try {

    // Clean question text
    const cleanPrompt = prompt
      .replace(/what is /i, '')
      .replace(/who is /i, '')
      .replace(/where is /i, '')
      .replace(/when is /i, '')
      .replace(/how /i, '')
      .replace(/can you /i, '')
      .replace(/tell me /i, '')
      .replace(/explain /i, '')
      .replace(/describe /i, '')
      .replace(/summarize /i, '')
      .replace(/summarise /i, '')
      .replace(/state /i, '')
      .trim();

    // Wikipedia search API
    const searchResponse = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(cleanPrompt)}&limit=1&namespace=0&format=json&origin=*`
    );

    const searchData = await searchResponse.json();

    // Get first result title
    const title = searchData[1][0];

    if (!title) {
      return "No information found.";
    }

    // Get summary
    const summaryResponse = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );

    const summaryData = await summaryResponse.json();

    return summaryData.extract || "No summary available.";

  } catch (error) {
    console.error(error);
    return "Sorry, I could not find information.";
  }
}