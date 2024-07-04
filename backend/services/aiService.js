// aiService.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const analyzeJob = async (jobTitle, industry, jobDescription) => {
  const prompt = `Based on the following job title, industry, and job description, suggest relevant job titles and rate the chances of getting those jobs.
Job Title: ${jobTitle}
Industry: ${industry}
Job Description: ${jobDescription}
Suggestions:`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
    n: 1, // Only one completion needed
    stop: null,
    temperature: 0.7,
  });

  const suggestions = response.data.choices[0].text.trim().split('\n').map(suggestion => {
    const [jobTitle, chance] = suggestion.split('-');
    return {
      jobTitle: jobTitle.trim(),
      chance: chance ? parseInt(chance.trim().replace('%', '')) : 0,
    };
  });

  return suggestions;
};

module.exports = {
  analyzeJob,
};
