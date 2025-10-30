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

export const updateTemplate = async (id: string, content: string) => {
  try {
    if (!id) throw new Error("id is required");
    if (!content) throw new Error("content is required");

    const response = await fetch(
      `https://resume-builder-api.paulenter143.workers.dev/api/template/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content })
          .replace(/</g, "\\u003c")
          .replace(/>/g, "\\u003e"), // защита от XSS
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

export const deleteTemplate = async (id: string) => {
  try {
    if (!id) throw new Error("id is required");

    const response = await fetch(
      `https://resume-builder-api.paulenter143.workers.dev/api/template/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
