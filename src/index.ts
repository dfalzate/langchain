import 'module-alias/register';
import dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';
// import { HumanMessage, SystemMessage } from '@langchain/core/messages';
// import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';

dotenv.config();

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.2,
  modelName: 'gpt-4o-mini',
});

async function testOpenAI() {
  const template = `
    You are an expert nodejs software developer
    Explain the concept of {concept} in a couple of lines
  `;

  const prompt = ChatPromptTemplate.fromTemplate(template);

  const chain = prompt.pipe(model).pipe(new StringOutputParser());

  try {
    // const messages = [
    //   new SystemMessage('You are an expert nodejs software developer'),
    //   new HumanMessage('Explain the concept of event loop in a couple of lines'),
    // ];
    // const prompt = new PromptTemplate({
    //   template,
    //   inputVariables: ['concept'],
    // });
    // const formattedPrompt = await prompt.format({ concept: 'event loop' });
    // const response = await model.invoke(formattedPrompt);
    // console.log('Response:', response);
    const response1 = await chain.invoke({ concept: 'event loop' });
    console.log(response1);
    const response2 = await chain.invoke({
      concept: 'explain in a different way',
    });
    console.log(response2);
  } catch (error) {
    console.error('Error:', error);
  }
}

testOpenAI();
