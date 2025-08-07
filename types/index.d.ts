// types/index.d.ts

interface Feedback {
  overall_rating: number;
  strengths?: string[];
  weaknesses?: string[];
  technical_skills_rating: number;
  technical_skills_feedback?: string;
  experience_rating: number;
  experience_feedback?: string;
  formatting_rating: number;
  formatting_feedback?: string;
  ats_compatibility: number;
  ats_feedback?: string;
  specific_improvements?: string[];
  job_match_score: number;
  job_match_feedback?: string;
}

interface Resume {
  resumeUrl: string;
  imageUrl: string;
  feedback: Feedback;
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
}
