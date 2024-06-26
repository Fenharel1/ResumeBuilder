const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function analyzeJob(jobTitle, industry, jobDescription) {
  const prompt = `
    Job Title: ${jobTitle}
    Industry: ${industry}
    Job Description: ${jobDescription}
    
    Based on the above information, suggest the most relevant skills and keywords to include in a CV.
  `;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}

module.exports = {
  analyzeJob,
};
