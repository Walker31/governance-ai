// Template API Service
// This service handles all template-related API calls

const API_BASE_URL = 'http://localhost:3001/api'; // Adjust based on your backend URL

export const templateService = {
  // Get all templates
  async getTemplates() {
    try {
      const response = await fetch(`${API_BASE_URL}/templates`);
      if (!response.ok) {
        throw new Error('Failed to fetch templates');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching templates:', error);
      throw error;
    }
  },

  // Create a new template
  async createTemplate(templateData) {
    try {
      const response = await fetch(`${API_BASE_URL}/templates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateData),
      });
      if (!response.ok) {
        throw new Error('Failed to create template');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating template:', error);
      throw error;
    }
  },

  // Get template by ID
  async getTemplateById(templateId) {
    try {
      const response = await fetch(`${API_BASE_URL}/templates/${templateId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch template');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching template:', error);
      throw error;
    }
  },

  // Submit template response
  async submitResponse(responseData) {
    try {
      const response = await fetch(`${API_BASE_URL}/template-responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responseData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit response');
      }
      return await response.json();
    } catch (error) {
      console.error('Error submitting response:', error);
      throw error;
    }
  },

  // Get all responses
  async getResponses() {
    try {
      const response = await fetch(`${API_BASE_URL}/template-responses`);
      if (!response.ok) {
        throw new Error('Failed to fetch responses');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching responses:', error);
      throw error;
    }
  },

  // Get responses by template ID
  async getResponsesByTemplate(templateId) {
    try {
      const response = await fetch(`${API_BASE_URL}/template-responses/template/${templateId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch template responses');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching template responses:', error);
      throw error;
    }
  },

  // Update template
  async updateTemplate(templateId, templateData) {
    try {
      const response = await fetch(`${API_BASE_URL}/templates/${templateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateData),
      });
      if (!response.ok) {
        throw new Error('Failed to update template');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating template:', error);
      throw error;
    }
  },

  // Delete template
  async deleteTemplate(templateId) {
    try {
      const response = await fetch(`${API_BASE_URL}/templates/${templateId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete template');
      }
      return await response.json();
    } catch (error) {
      console.error('Error deleting template:', error);
      throw error;
    }
  },

  // Export responses to CSV
  async exportResponses(templateId) {
    try {
      const response = await fetch(`${API_BASE_URL}/template-responses/export/${templateId}`, {
        method: 'GET',
        headers: {
          'Accept': 'text/csv',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to export responses');
      }
      return await response.blob();
    } catch (error) {
      console.error('Error exporting responses:', error);
      throw error;
    }
  }
};

// Mock service for development (when backend is not available)
export const mockTemplateService = {
  async getTemplates() {
    // Return sample templates from constants
    const { sampleTemplates } = await import('../constants/templates');
    return sampleTemplates;
  },

  async createTemplate(templateData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      ...templateData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
  },

  async submitResponse(responseData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      ...responseData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
  },

  async getResponses() {
    // Return empty array for mock
    return [];
  }
};

// Use real service (you can switch to mockTemplateService for development without backend)
export default templateService; 