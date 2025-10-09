export const getTemplates = async () =>  {
  try {
    const response = await fetch('https://resume-builder-api.paulenter143.workers.dev/api/template/', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json' 
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const templates = await response.json();
    return templates;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

export const createTemplate = async (templateData : object) => {
  try {
    const response = await fetch('https://resume-builder-api.paulenter143.workers.dev/api/template/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(templateData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newTemplate = await response.json();
    return newTemplate;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}