'use server';
/**
 * @fileOverview A Genkit flow for tailoring a developer's professional summary.
 *
 * - aiProfessionalTailorSummary - A function that rephrases a professional summary based on industry interest.
 * - AiProfessionalTailorSummaryInput - The input type for the aiProfessionalTailorSummary function.
 * - AiProfessionalTailorSummaryOutput - The return type for the aiProfessionalTailorSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiProfessionalTailorSummaryInputSchema = z.object({
  originalSummary: z.string().describe("The developer's original professional summary."),
  industryInterest: z.string().describe("The stated industry interest of the recruiter or potential employer."),
});
export type AiProfessionalTailorSummaryInput = z.infer<typeof AiProfessionalTailorSummaryInputSchema>;

const AiProfessionalTailorSummaryOutputSchema = z.object({
  tailoredSummary: z.string().describe("The AI-rephrased professional summary, tailored to the specified industry interest."),
});
export type AiProfessionalTailorSummaryOutput = z.infer<typeof AiProfessionalTailorSummaryOutputSchema>;

export async function aiProfessionalTailorSummary(input: AiProfessionalTailorSummaryInput): Promise<AiProfessionalTailorSummaryOutput> {
  return aiProfessionalTailorSummaryFlow(input);
}

const aiProfessionalTailorSummaryPrompt = ai.definePrompt({
  name: 'aiProfessionalTailorSummaryPrompt',
  input: {schema: AiProfessionalTailorSummaryInputSchema},
  output: {schema: AiProfessionalTailorSummaryOutputSchema},
  prompt: `You are an AI assistant specialized in tailoring professional summaries for specific industries. Your task is to rephrase the provided professional summary to highlight aspects most relevant and appealing to a potential employer in the '{{industryInterest}}' industry. Focus on keywords, skills, and experiences that align with that industry's needs and terminology. Keep the rephrased summary concise, impactful, and professional.

Original Professional Summary:
{{{originalSummary}}}

Tailored Summary:`,
});

const aiProfessionalTailorSummaryFlow = ai.defineFlow(
  {
    name: 'aiProfessionalTailorSummaryFlow',
    inputSchema: AiProfessionalTailorSummaryInputSchema,
    outputSchema: AiProfessionalTailorSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await aiProfessionalTailorSummaryPrompt(input);
    return output!;
  }
);
