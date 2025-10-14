export const getTemplates = async () => {
  try {
    const response = await fetch(
      "https://resume-builder-api.paulenter143.workers.dev/api/template/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const templates = await response.json();
    return templates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTemplate = async (templateData: object | undefined, dataId?: string) => {
  try {
    if (!templateData) throw new Error("templateData is undefined");

    const data = templateData as any;

    const requestBody: Record<string, any> = {
      content: data,
    };

    if (dataId && dataId.trim()) {
      requestBody.id = dataId;
    }

    const response = await fetch(
      "https://resume-builder-api.paulenter143.workers.dev/api/template/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody).replace(/</g, "\\u003c").replace(/>/g, "\\u003e"),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
