// Расширенный тип для feedback
interface Feedback {
  overall_rating: number; // number (0-10, например 7.5)
  strengths: string[];
  weaknesses: string[];
  missing_requirements: string[];
  ats_compatibility: number; // number (0-10)
  ats_issues: string[];
  recommendations: string[];
  job_match_score: number; // number (0-10)
  keyword_optimization: number; // number (0-10)
  keyword_suggestions: string[];
  job_match_analysis: string;
  suggested_improvements: string[];
  formatting_suggestions: string[];
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
