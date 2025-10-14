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
    console.error("Error", error);
    throw error;
  }
};

export const createTemplate = async (templateData: object | undefined, dataId?: string) => {
  try {
    if (!templateData) throw new Error("templateData is undefined");

    const data = templateData as any;

    const safeContent = JSON.stringify(data)
      .replace(/<script>/g, "&lt;script&gt;")
      .replace(/<\/script>/g, "&lt;/script&gt;");

    const requestBody: Record<string, any> = {
      content: safeContent,
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
        body: JSON.stringify(requestBody),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createTemplate:", error);
    throw error;
  }
};
